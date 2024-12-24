import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../../contexts/OrderContext";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import PickUpTime from "../../components/order/PickUpTime";
import { IoIosArrowDown } from "react-icons/io";
import Memo from "../../components/order/Memo";

const Payment = () => {
  const { order, setOrder, popMemo, setPopMemo } = useContext(OrderContext);
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

  const location = useLocation();
  const cafeName = location.state;

  // 쿼리 스트링 주소 처리
  const [searchParams, setSearchParams] = useSearchParams();

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

  return (
    <div>
      <div className="top">
        <Link to="/order/menu">X</Link>
        <p>{cafeName}</p>
      </div>
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
                <p>{item.price * item.count}</p>
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
      <div className="pickUpTime">
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
        <div className="totalPrice">
          <div className="price">
            <p>주문 금액</p>
            <p>{order.menuList.map}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
