import axios from "axios";
import { useContext } from "react";
import { OrderContext } from "../contexts/OrderContext";

export const getCafeMenu = async data => {
  try {
    const res = await axios.get(`/api/cafe/menu?cafe_id=${data}`);
    console.log("getCafeMenu res:", res.data);
  } catch (error) {
    console.log(error);
  }
};

export const getMenuOption = async data => {
  try {
    const res = await axios.get(`/api/cafe/menu/option?menu_id=${data}`);
    console.log("getMenuOption res:", res.data);
  } catch (error) {
    console.log(error);
  }
};

export const postOrder = async data => {
  try {
    const res = await axios.post(`백엔드주소`, data);
    console.log("postOrder res:", res.data);
    const result = res.data;
    return result;
  } catch (error) {
    console.log(error);
  }
};
