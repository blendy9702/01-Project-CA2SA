import { useState } from "react";
import MenuDetail from "../../pages/order/MenuDetail";

const Menu = ({ item }) => {
  const [popupDetail, setPopUpDetail] = useState(false);
  return (
    <div
      style={{ display: "flex" }}
      onClick={() => {
        setPopUpDetail(true);
      }}
    >
      <div className="menu-info">
        <h4>{item.menuName}</h4>
        <p>{item.comment}</p>
        <h4>{item.price}</h4>
      </div>
      <div className="menu-thum">
        <img src={item.menuPic} alt="메뉴 사진" />
      </div>
      {popupDetail ? (
        <MenuDetail
          item={item}
          popupDetail={popupDetail}
          setPopUpDetail={setPopUpDetail}
        ></MenuDetail>
      ) : null}
    </div>
  );
};
export default Menu;
