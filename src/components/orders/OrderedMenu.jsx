import { useState } from "react";
import { AlternativeButton, PrimaryButton } from "../../styles/common";
import { OrderedMenuDiv } from "../../styles/orders/orderspage";
import OrderDetail from "../order/OrderDetail";

const OrderedMenu = ({ item }) => {
  const progressArr = [0, 1, 2, 3];
  const menuInfo = item;
  const makeProgressName = item => {
    switch (item) {
      case 0:
        return "주문접수";
      case 1:
        return "준비중";
      case 2:
        return "준비완료";
      case 3:
        return "수령완료";
      default:
        return "기타";
    }
  };
  // useState
  const [recentOrder, setResentOrder] = useState({});
  const [showOrderDetail, setShowOrderDetail] = useState(false);
  // 금액 계산
  const totalPrice = (item.orderMenuList || []).reduce((acc, curr) => {
    const menuDefualtPrice = curr.price;
    const menuAddPrice = curr.options.reduce(
      (_acc, _curr) => _acc + _curr.addPrice,
      0,
    );
    return acc + menuDefualtPrice + menuAddPrice;
  }, 0);
  //상세보기
  const handleClickShowMore = () => {
    console.log(item);
    setResentOrder(item);
    setShowOrderDetail(false);
  };
  return (
    <OrderedMenuDiv>
      <div className="state">
        <p className="createdAt">{menuInfo.createdAt}</p>
        <p>|</p>
        <p>{makeProgressName(menuInfo.orderProgress)}</p>
      </div>
      <div className="cafe-menu">
        <p className="cafe">{menuInfo.cafeName}</p>
        <div className="menu">
          <p>
            {menuInfo.orderMenuList.length > 1
              ? `${menuInfo.orderMenuList[0].orderMenuName} 외 ${menuInfo.orderMenuList.length - 1}건`
              : menuInfo.orderMenuList[0].orderMenuName}
          </p>
          <p>{totalPrice.toLocaleString()}원</p>
        </div>
      </div>
      <div className="orderButton">
        <PrimaryButton>재주문 할게요</PrimaryButton>
        <AlternativeButton onClick={() => handleClickShowMore()}>
          주문 상세
        </AlternativeButton>
      </div>
    </OrderedMenuDiv>
  );
};

export default OrderedMenu;
