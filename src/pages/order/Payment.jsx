import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../../contexts/OrderContext";
import { Link, useLocation, useSearchParams } from "react-router-dom";

const Payment = () => {
  const { order, setOrder } = useContext(OrderContext);
  // order가 제대로 바뀌고 있는지 확인, 오자마자 배열 정리시키기
  useEffect(() => {
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
        existingOrder.count += Number(curr.count);
      } else {
        acc.push({ ...curr });
      }
      return acc;
    }, []);
    console.log("정리된 배열:", stackedOrder);
    setOrder(prevOrder => {
      return { ...prevOrder, menu: stackedOrder };
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
      const updatedMenu = [...prevOrder.menu];
      if (updatedMenu[index].count > 1) {
        updatedMenu[index].count -= 1; // 수량 감소
      }
      return { ...prevOrder, menu: updatedMenu };
    });
  };
  const handleClickPluls = index => {
    setOrder(prevOrder => {
      const updatedMenu = [...prevOrder.menu];
      if (updatedMenu[index].count >= 0) {
        updatedMenu[index].count += 1; // 수량 감소
      }
      return { ...prevOrder, menu: updatedMenu };
    });
  };

  return (
    <div>
      <div className="top">
        <Link to="/menu">X</Link>
        <p>{cafeName}</p>
      </div>
      <div className="orderList">
        {order.menu.map((item, index) => {
          return (
            <div key={index}>
              <div className="itemInfo">
                <p className="itemName">{item.menuName}</p>
                <p>
                  {item.state} {item.size}
                  {item.beans === true ? `/${item.beans}` : null}
                  {item.addOption === true ? `/${item.addOption}` : null}
                </p>
                <p>금액</p>
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
      </div>
    </div>
  );
};

export default Payment;
