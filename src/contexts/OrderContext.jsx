import { createContext, useEffect, useState } from "react";

export const OrderContext = createContext();

const initData = {
  pickUpTime: "",
  memo: "",
  userId: "",
  cafeId: "",
  menuList: [],
  // orderTime: "",
};

export const OrderContextProvider = ({ children }) => {
  const [order, setOrder] = useState(initData);
  const [cartList, setCartList] = useState([]);

  //요청사항 팝업
  const [popMemo, setPopMemo] = useState(false);

  // order-menuList에 계속 담기
  const addCartList = data => {
    const addlist = { ...data };
    const prevCart = [...cartList];
    const updatedCart = [...prevCart, addlist];
    setCartList(updatedCart);
    // console.log(updatedCart);
    setOrder({ ...order, menuList: [...updatedCart] });
  };

  // 최종 오더 내용 정리
  // const { cafeId, memo, menuList, pickUpTime, userId } = order;
  // console.log("최종오더:", menuList);
  // const fixedMenuList = menuList.map((item, index) => {
  //   return { menuId: item.menuId, count: item.count, options: item.options };
  // });
  // const fixedOrder = { ...order, menuList: fixedMenuList };
  // console.log("fixedOrder:", fixedOrder);
  // useEffect(() => {
  //   setFinalOrder(fixedOrder);
  //   console.log("최종 오더 내용:", finalOrder);
  // }, []);

  return (
    <OrderContext.Provider
      value={{
        order,
        setOrder,
        cartList,
        setCartList,
        addCartList,
        popMemo,
        setPopMemo,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
