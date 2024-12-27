import { createContext, useState } from "react";

export const OrderContext = createContext();

const initData = {
  cafeId: "",
  userId: "",
  orderTime: "",
  pickUpTime: "",
  memo: "",
  menuList: [],
};

export const OrderContextProvider = ({ children }) => {
  const [order, setOrder] = useState(initData);
  const [cartList, setCartList] = useState([]);
  //요청사항 팝업
  const [popMemo, setPopMemo] = useState(false);

  const addCartList = data => {
    const addlist = { ...data };
    const prevCart = [...cartList];
    const updatedCart = [...prevCart, addlist];
    setCartList(updatedCart);
    // console.log(updatedCart);
    setOrder({ ...order, menuList: [...updatedCart] });
  };

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
