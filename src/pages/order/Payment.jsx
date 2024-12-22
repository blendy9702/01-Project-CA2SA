import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../../contexts/OrderContext";
import { useLocation, useSearchParams } from "react-router-dom";

const Payment = () => {
  const { order } = useContext(OrderContext);
  // order가 제대로 바뀌고 있는지 확인
  useEffect(() => {
    // console.log("현재 order 상태:", order);
  }, [order]);

  const location = useLocation();
  const cafeName = location.state;

  // 쿼리 스트링 주소 처리
  const [searchParams, setSearchParams] = useSearchParams();

  //중복 메뉴 합치기
  //임시 메뉴 리스트 부여
  const orderList = [...order.menu];
  console.log("장바구니 목록:", orderList);
  const stackedOrder = orderList.reduce((acc, curr) => {
    const existingOrder = acc.find(
      item =>
        item.menuId === curr.menuId &&
        item.state === curr.state &&
        item.size === curr.size &&
        JSON.stringify(item.beans) === JSON.stringify(curr.beans) &&
        JSON.stringify(item.addOption) === JSON.stringify(curr.addOption),
    );
    if (existingOrder) {
      existingOrder.count += curr.count;
    } else {
      acc.push({ ...curr });
    }
    return acc;
  }, []);
  console.log("정리된 배열:", stackedOrder);

  return (
    <div>
      <div className="header">
        <button type="button">X</button>
        <h3>장바구니</h3>
      </div>
      <div className="cart">
        <h4>{cafeName}</h4>
        <div className="cart-list"></div>
      </div>
    </div>
  );
};

export default Payment;
