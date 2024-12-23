import { createContext, useState } from "react";

export const OrderContext = createContext();

const initData = {
  cafeId: "",
  userId: "",
  orderTime: "",
  pickUpTime: "",
  memo: "",
  menu: [],
};

export const OrderContextProvider = ({ children }) => {
  const [order, setOrder] = useState(initData);
  const [cartList, setCartList] = useState([]);

  const addCartList = data => {
    const addlist = { ...data };
    const prevCart = [...cartList];
    const updatedCart = [...prevCart, addlist];
    setCartList(updatedCart);
    // console.log(updatedCart);
    setOrder({ ...order, menu: [...updatedCart] });
  };

  return (
    <OrderContext.Provider
      value={{
        order,
        setOrder,
        cartList,
        setCartList,
        addCartList,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
