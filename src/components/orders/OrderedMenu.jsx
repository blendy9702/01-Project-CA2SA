import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AlternativeButton, PrimaryButton } from "../../styles/common";
import { OrderedMenuDiv } from "../../styles/orders/orderspage";
import { OrderContext } from "../../contexts/OrderContext";

const OrderedMenu = ({ item }) => {
  // useContext
  const { order, setOrder } = useContext(OrderContext);
  // const userId = order.userId;
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  const userId = userData.resultData.userId;
  // console.log(userId);

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
      case 4:
        return "주문 반려";
      case 5:
        return "주문취소";
      case 6:
        return "주문취소 확정";
      default:
        return "기타";
    }
  };
  // useNavigate
  const navigate = useNavigate();
  const handleNavigateOrderDetails = item => {
    console.log("클릭 아이템", menuInfo);
    navigate(`/order/confirmation?userId=${userId}&page=1&size=30`, {
      state: menuInfo,
    });
  };
  //상세보기
  const handleClickShowMore = () => {
    console.log();
    navigate(`/orders/detail?userId=${userId}&orderId=${item.orderId}`, {
      state: item,
    });
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

  // 재주문

  const handleClickReorder = () => {
    console.log(item);
    setOrder({
      ...order,
      cafeId: item.cafeId,
      userId: userId,
      menuList: item.orderMenuList.map((item, index) => {
        return {
          count: item.count,
          options: item.options,
          menuId: item.menuId,
          menuName: item.orderMenuName,
          price: item.price,
        };
      }),
    });
    navigate(`/order/payment?cafeId=${item.cafeId}`, {
      state: {
        cafeId: item.cafeId,
        cafeName: item.cafeName,
        location: item.location,
      },
    });
  };
  return (
    <OrderedMenuDiv>
      <div className="state">
        <p className="createdAt">{menuInfo.createdAt}</p>
        <p>|</p>
        <p
          style={{
            cursor: "pointer",
            color:
              menuInfo.orderProgress > 3
                ? "var(--color-gray-300)"
                : "var(--color-gray-500)",
            textDecoration:
              menuInfo.orderProgress > 3 ? "line-throught" : "none",
          }}
          onClick={() => handleNavigateOrderDetails()}
        >
          {makeProgressName(menuInfo.orderProgress)}
        </p>
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
        <PrimaryButton onClick={() => handleClickReorder()}>
          재주문 할게요
        </PrimaryButton>
        <AlternativeButton onClick={() => handleClickShowMore()}>
          주문 상세
        </AlternativeButton>
      </div>
    </OrderedMenuDiv>
  );
};

export default OrderedMenu;
