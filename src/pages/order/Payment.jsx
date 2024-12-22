import { useContext, useEffect } from "react";
import { OrderContext } from "../../contexts/OrderContext";
import { useLocation, useSearchParams } from "react-router-dom";

const Payment = () => {
  const { order } = useContext(OrderContext);
  // order가 제대로 바뀌고 있는지 확인
  useEffect(() => {
    console.log("현재 order 상태:", order);
  }, [order]);

  const location = useLocation();
  const cafeName = location.state;

  // 쿼리 스트링 주소 처리
  const [searchParams, setSearchParams] = useSearchParams();

  const sumOrder = order.map((item, index) => {});

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
