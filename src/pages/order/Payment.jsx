import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../../contexts/OrderContext";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import PickUpTime from "../../components/order/PickUpTime";
import { IoIosArrowDown } from "react-icons/io";
import Memo from "../../components/order/Memo";
import PaymentOption from "../../components/order/PaymentOption";
import { postOrder } from "../../apis/orderapi";
import axios from "axios";
import NavBar from "../../components/order/NavBar";

const Payment = () => {
  // 쿼리 스트링 주소 처리
  const [searchParams, setSearchParams] = useSearchParams();
  // useContext
  const { order, setOrder, popMemo, setPopMemo } = useContext(OrderContext);
  useEffect(() => {
    console.log("order:", order);
  }, [order]);

  // uesNavigate
  const navigate = useNavigate();
  const location = useLocation();
  const locationData = location.state;
  console.log("locationData", locationData);
  const cafeId = locationData[0];
  const cafeInfo = locationData[1];
  const fromPage = locationData[2];
  const handleNavigateClose = () => {
    navigate(`/order`, {
      state: [{ cafeId: cafeId }, cafeInfo, { from: "/menu" }],
    });
  };

  // order가 제대로 바뀌고 있는지 확인, 오자마자 배열 정리시키기
  useEffect(() => {
    //중복 메뉴 합치기
    //임시 메뉴 리스트 부여
    const orderList = [...order.menuList];
    console.log("장바구니 목록:", orderList);
    const stackedOrder = orderList.reduce((acc, curr) => {
      //options를 객체로 변환시키기
      const parsedOptions = curr.options.map(option => {
        try {
          // option이 문자열이라면 { menuOptionId: option } 형태로 변환
          return { menuOptionId: option };
        } catch (e) {
          console.error("옵션 파싱 오류:", e);
          return { menuOptionId: option }; // 오류 발생 시 원본 값을 그대로 사용
        }
      });
      const existingOrder = acc.find(
        item =>
          item.menuId === curr.menuId &&
          item.state === curr.state &&
          item.size === curr.size &&
          JSON.stringify(item.options) === JSON.stringify(parsedOptions),
      );
      if (existingOrder) {
        existingOrder.count += Number(curr.count);
      } else {
        acc.push({ ...curr, options: parsedOptions });
      }
      return acc;
    }, []);
    console.log("정리된 배열:", stackedOrder);
    setOrder(prevOrder => {
      return { ...prevOrder, menuList: stackedOrder };
    });
  }, [setOrder]);
  console.log(order);

  // 수량 변경
  const handleClickMinus = index => {
    setOrder(prevOrder => {
      const updatedMenu = [...prevOrder.menuList];
      if (updatedMenu[index].count > 1) {
        updatedMenu[index].count -= 1; // 수량 감소
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
    // postOrder(order); order에 있는 내용물을 보내고, 결과로 return result (=res.data)를 받기
    // resultData가 있다면(또는 1이라면) getOrderInfo해서 정보 불러오기
    // 해당 정보를 담아서 navigation의 state에 담아 다음 페이지로 보내기
    // 없다면, 실패라면 alert창이라도 띄우기
    navigation(`/order/confirmation`);
  };

  return (
    <div>
      <NavBar onClick={handleNavigateClose} icon={"close"} title={"장바구니"} />
      <div className="orderList">
        {order.menuList.map((item, index) => {
          return (
            <div key={index}>
              <div className="itemInfo">
                <p className="itemName">{item.menuName}</p>
                <p>
                  {item.state} {item.size}
                  {item.beans === true ? `/${item.beans}` : null}
                  {item.addOption === true ? `/${item.addOption}` : null}
                </p>
                <p>{item.price}</p>
              </div>
              <div className="count">
                <button type="button" onClick={() => handleClickMinus(index)}>
                  -
                </button>
                <input
                  type="number"
                  value={item.count}
                  onChange={e => {
                    item.count(e.target.value);
                  }}
                />
                <button type="button" onClick={() => handleClickPluls(index)}>
                  +
                </button>
              </div>
            </div>
          );
        })}
        <Link to="/order/menu">+ 메뉴 추가하기</Link>
      </div>
      <div className="pickUpTime" style={{ display: "flex", flexWrap: "wrap" }}>
        <p>예상 수령 시간</p>
        <PickUpTime minutes={0} />
        <PickUpTime minutes={5} />
        <PickUpTime minutes={10} />
        <PickUpTime minutes={15} />
        <PickUpTime minutes={20} />
        <PickUpTime minutes={30} />
        <PickUpTime minutes={40} />
        <PickUpTime minutes={60} />
      </div>
      <div className="memo">
        <p>요청 사항</p>
        <div
          style={{ display: "flex" }}
          onClick={() => {
            setPopMemo(!popMemo);
          }}
        >
          <p>요청 사항 선택</p>
          <IoIosArrowDown />
        </div>
        {popMemo ? <Memo /> : null}
      </div>
      <div className="totalPrice">
        <p>결제금액</p>
        <div className="price">
          <div>
            <p>주문 금액</p>
            <p>
              {order.menuList.reduce((acc, curr) => {
                const totalPrice = acc + curr.price * curr.count;
                return totalPrice;
              }, 0)}
              원
            </p>
          </div>
          <div>
            <p>총 결제 금액</p>
            <p>
              {order.menuList.reduce((acc, curr) => {
                const totalPrice = acc + curr.price * curr.count;
                return totalPrice;
              }, 0)}
              원
            </p>
          </div>
        </div>
      </div>
      <div className="selectPay">
        <div
          className="paymentOption"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          <PaymentOption name={"카카오페이"} />
          <PaymentOption name={"삼성페이"} />
          <PaymentOption name={"토스페이"} />
          <PaymentOption name={"네이버페이"} />
          <PaymentOption name={"PAYCO"} />
          <PaymentOption name={"신용/체크카드"} />
        </div>
        <p>* 매장 사정에 따라 주문이 취소될 수 있습니다.</p>
      </div>
      <div className="pay">
        <p>
          <span>결제 대행 서비스 이용약관</span>을 확인하였으며, 결제에
          동의합니다.
        </p>
        <button type="button" onClick={handleClickPay}>
          {order.menuList.reduce((acc, curr) => {
            const totalPrice = acc + curr.price * curr.count;
            return totalPrice;
          }, 0)}
          원 결제
        </button>
      </div>
    </div>
  );
};

export default Payment;
