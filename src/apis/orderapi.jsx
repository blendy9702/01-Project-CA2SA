import axios from "axios";
import { useContext } from "react";
import { OrderContext } from "../contexts/OrderContext";

export const getCafeMenu = async data => {
  try {
    const res = await axios.get(`/api/cafe/menu?cafe_id=${data}`);
    console.log("카페메뉴 res:", res.data);
  } catch (error) {
    console.log(error);
  }
};

export const getMenuOption = async data => {
  try {
    const res = await axios.get(`/api/cafe/menu/option?menu_id=${data}`);
  } catch (error) {
    console.log(error);
  }
};
