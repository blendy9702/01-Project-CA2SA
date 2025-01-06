import { useContext, useEffect, useState } from "react";

import axios from "axios";
import moment from "moment";
import { IoIosArrowDown } from "react-icons/io";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Memo from "../../components/order/Memo";
import NavBar from "../../components/order/NavBar";
import PaymentOption from "../../components/order/PaymentOption";
import PickUpTime from "../../components/order/PickUpTime";
import { PrimaryButton } from "../../styles/common";
import { ContainerDiv, LayoutDiv } from "../../styles/order/orderpage";

import { OrderContext } from "../../contexts/OrderContext";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import DeleteMenuModal from "../../components/order/DeleteMenuModal";

// 예상 수령시간 관리용 배열
const pickUPTimeArr = [0, 5, 10, 15, 20, 30, 40, 60];
// 결제 방법 관리용 배열
// const payOptionArr = [
//   "카카오페이",
//   "삼성페이",
//   "토스페이",
//   "네이버페이",
//   "PAYCO",
//   "신용/체크카드",
// ];
const Payment = () => {
  // 쿼리 스트링 주소 처리
  const [searchParams, setSearchParams] = useSearchParams();
  const cafeId = parseInt(searchParams.get("cafeId"));
  // useContext
  const { order, setOrder } = useContext(OrderContext);
  useEffect(() => {}, [order]);

  // uesNavigate
  const navigate = useNavigate();
  const location = useLocation();
  const locationData = location.state;

  //useState
  const [isTime, setIsTime] = useState(0);
  const [cafeInfo, setCafeInfo] = useState({});
  const [popMemo, setPopMemo] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  const userId = userData.resultData.userId;

  useEffect(() => {
    // console.log("order:", order);
  }, [order]);

  useEffect(() => {
    const getCafe = async data => {
      try {
        const res = await axios.get(`/api/cafe/${data}`);
        const resultData = res.data.resultData;
        setCafeInfo(resultData);
      } catch (error) {
        console.log("카페정보 통신 결과:", error);
        // console.log("mockData가 적용됩니다.");
        // setCafeInfo(mockDataResult);
      }
    };
    getCafe(cafeId);
  }, []);

  const handleNavigateClose = () => {
    navigate(-1, {
      state: cafeInfo,
    });
  };
  const handleNavigateHome = () => {
    navigate("/");
  };
  const handleNavigateAddMenu = () => {
    navigate(`/order/menu?cafeId=${order.cafeId}`, { state: locationData });
  };
  const handleNavigateConfirm = () => {
    navigate(`/order/confirmation?userId=${userId}&page=1&size=30`);
  };
  // 오자마자 cafeId, userId 다시 확인하고 집어 넣기

  useEffect(() => {
    setOrder({
      ...order,
      userId: userId,
      pickUpTime: moment().format("HH:mm:ss"),
    });
  }, []);
  // order가 제대로 바뀌고 있는지 확인, 오자마자 배열 정리시키기
  useEffect(() => {
    // 중복 메뉴 합치기
    // 임시 메뉴 리스트 부여
    const orderList = [...order.menuList];
    const stackedOrder = orderList.reduce((acc, curr) => {
      const existingOrder = acc.find(
        item =>
          item.menuId === curr.menuId &&
          JSON.stringify(item.options) === JSON.stringify(curr.options),
      );
      if (existingOrder) {
        existingOrder.count += Number(curr.count);
      } else {
        acc.push({ ...curr, options: curr.options });
      }
      return acc;
    }, []);
    setOrder(prevOrder => {
      return { ...prevOrder, menuList: stackedOrder };
    });
  }, [setOrder]);

  const handleClickPickUpTime = (item, index) => {
    // order에 픽업 시간 넣기
    const now = moment();
    const nowTime = now.format("YYYY-MM-DD HH:mm:ss");
    const addMinutes = now.add(item, "minutes").format("HH:mm:ss");
    // setOrder({ ...order, pickUpTime: addMinutes, orderTime: nowTime }); //orderTime 코드 삭제
    setOrder({ ...order, pickUpTime: addMinutes });
    // 예상 수령 시간 픽업 시 버튼과 selectedTime의 index 비교
    setIsTime(index);
  };

  // 금액 계산
  const showPrice = order.menuList
    .reduce((acc, curr) => {
      const totalPrice = acc + curr.price * curr.count;
      return totalPrice;
    }, 0)
    .toLocaleString();

  // 수량 변경
  const handleClickMinus = index => {
    setOrder(prevOrder => {
      const updatedMenu = [...prevOrder.menuList];
      if (updatedMenu[index].count > 1) {
        updatedMenu[index].count -= 1; // 수량 감소
      } else {
        setShowModal(true);
        // updatedMenu.splice(index, 1);
      }
      return { ...prevOrder, menuList: updatedMenu };
    });
  };
  const handleClickPluls = index => {
    setOrder(prevOrder => {
      const updatedMenu = [...prevOrder.menuList];
      if (updatedMenu[index].count >= 0) {
        updatedMenu[index].count += 1; // 수량 감소
      }
      return { ...prevOrder, menuList: updatedMenu };
    });
  };

  //결제 버튼
  const handleClickPay = () => {
    // axios
    const postOrder = async data => {
      console.log("보내지는 데이터", data);
      try {
        const res = await axios.post(`/api/order`, data);
        console.log(res.data);
        const resultData = res.data.resultData;
        if (resultData === 1) {
          console.log("order을 비웁니다.");
          setOrder({
            ...order,
            pickUpTime: "",
            memo: "",
            cafeId: "",
            menuList: [],
            // orderTime: "",
          });
        }
        handleNavigateConfirm();
      } catch (error) {
        console.log(error);
        alert("통신 오류로 인해 주문을 초기화합니다");
        setOrder({
          ...order,
          pickUpTime: "",
          memo: "",
          cafeId: "",
          menuList: [],
          // orderTime: "",
        });
        handleNavigateHome();
      }
    };
    // 최종 배열 정리
    const { cafeId, memo, menuList, pickUpTime, userId } = order;
    const fixedMenuList = menuList.map((item, index) => {
      return {
        menuId: item.menuId,
        count: item.count,
        options: item.options.map((_item, _index) => {
          return { menuOptionId: _item.menuOptionId };
        }),
      };
    });
    const fixedOrder = { ...order, menuList: fixedMenuList };

    postOrder(fixedOrder);

    // postOrder(order); order에 있는 내용물을 보내고, 결과로 return result (=res.data)를 받기
    // resultData가 있다면(또는 1이라면) getOrderInfo해서 정보 불러오기
    // 해당 정보를 담아서 navigation의 state에 담아 다음 페이지로 보내기
    // 없다면, 실패라면 alert창이라도 띄우기
  };

  return (
    <div style={{ position: "relative", paddingBottom: 80, width: "100%" }}>
      <NavBar onClick={handleNavigateClose} icon={"close"} title={"장바구니"} />
      {/* 메뉴 주문 정보 */}
      <LayoutDiv borderTop={1} borderBottom={5}>
        <ContainerDiv>
          <h4>{cafeInfo ? cafeInfo.cafeName : "정보가 없습니다"}</h4>
          <div className="orderListBox">
            <div className="orderList">
              {order.menuList.map((item, index) => {
                return (
                  <div className="menu" key={index}>
                    <div className="itemInfo">
                      {/* <p>메뉴 아이디: {item.menuId}</p> */}
                      <p className="itemName">{item.menuName}</p>
                      <div className="itemOption">
                        {item.options.map((_item, _index) => {
                          return (
                            <span key={_index}>{_item.menuOptionName}</span>
                          );
                        })}
                      </div>
                      {/* 수량 변경 */}
                      <div className="count-price">
                        <p>{item.price.toLocaleString()} 원</p>
                        <div className="count">
                          <button
                            type="button"
                            onClick={() => handleClickMinus(index)}
                          >
                            <AiOutlineMinus />
                          </button>
                          <input
                            type="text"
                            value={item.count}
                            onChange={e => {
                              item.count(e.target.value);
                            }}
                          />
                          <button
                            type="button"
                            onClick={() => handleClickPluls(index)}
                          >
                            <AiOutlinePlus />
                          </button>
                        </div>
                        {showModal ? (
                          <DeleteMenuModal
                            showModal={showModal}
                            setShowModal={setShowModal}
                            item={item}
                            index={index}
                          />
                        ) : null}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <button className="add-menu" onClick={handleNavigateAddMenu}>
              + 메뉴 추가하기
            </button>
          </div>
        </ContainerDiv>
      </LayoutDiv>
      {/* 예상 수령 시간 */}
      <LayoutDiv borderBottom={5}>
        <ContainerDiv style={{ padding: "20px" }}>
          <h4 style={{ paddingBottom: 10 }}>예상 수령 시간</h4>
          <div className="pickUpTimeList">
            {pickUPTimeArr.map((item, index) => {
              return (
                <PickUpTime
                  minutes={item}
                  key={index}
                  selectedTime={isTime === index ? true : false}
                  onClick={() => handleClickPickUpTime(item, index)}
                />
              );
            })}
          </div>
        </ContainerDiv>
      </LayoutDiv>
      {/* 요청 사항 */}
      <LayoutDiv borderBottom={5}>
        <ContainerDiv>
          <h4 style={{ paddingBottom: 10 }}>요청 사항</h4>
          <div
            className="show-memoList"
            onClick={() => {
              setPopMemo(!popMemo);
            }}
          >
            <p>{order.memo ? order.memo : "요청 사항 선택"}</p>
            <IoIosArrowDown />
          </div>
          <Memo popMemo={popMemo} setPopMemo={setPopMemo} />
          {/* {popMemo ? <Memo /> : null} */}
        </ContainerDiv>
      </LayoutDiv>
      {/* 결제 금액 */}
      <LayoutDiv borderBottom={5}>
        <ContainerDiv>
          <h4 style={{ paddingBottom: 10 }}>결제금액</h4>
          <div className="price">
            <div className="priceBox-a">
              <p>주문 금액</p>
              <p style={{ color: "var(--color-gray-900)" }}>{showPrice}원</p>
            </div>
            <div className="priceBox-b">
              <p>총 결제 금액</p>
              <p className="total">{showPrice}원</p>
            </div>
          </div>
        </ContainerDiv>
      </LayoutDiv>
      {/* 결제 방법 */}
      {/* <LayoutDiv>
        <ContainerDiv>
          <h4 style={{ paddingBottom: 10 }}>결제 방법</h4>
          <div className="paymentOption">
            {payOptionArr.map((item, index) => {
              return <PaymentOption key={index} name={item} />;
            })}
            <p>* 매장 사정에 따라 주문이 취소될 수 있습니다.</p>
          </div>
        </ContainerDiv>
      </LayoutDiv> */}
      {/* 결제 */}
      <LayoutDiv>
        <ContainerDiv>
          <div className="pay">
            <p>
              <u>결제 대행 서비스 이용약관</u>을 확인하였으며, 결제에
              동의합니다.
            </p>
            <PrimaryButton type="button" onClick={handleClickPay}>
              {showPrice}원 결제
            </PrimaryButton>
          </div>
        </ContainerDiv>
      </LayoutDiv>
    </div>
  );
};

export default Payment;
