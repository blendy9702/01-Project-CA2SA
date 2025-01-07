import { MenuDiv } from "../../styles/order/orderpage";

const Menu = ({ item, index, onClick }) => {
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  const userId = userData.resultData.userId;
  return (
    <MenuDiv onClick={onClick} className="menu">
      <div className="menu-info">
        <h4 style={{ marginBottom: 5 }}>{item.menuName}</h4>
        <p>{item.comment}</p>
        <h4>{parseInt(item.price).toLocaleString()}원</h4>
      </div>
      <div className="menu-thum">
        {/* <img src={item.menuPic} alt="메뉴 사진" /> */}
        <img
          src={
            item.menuPic
              ? `http://112.222.157.156:5214${item.menuPic}`
              : "/images/order/cat.jpg"
          }
          alt="메뉴 사진"
        />
      </div>
    </MenuDiv>
  );
};
export default Menu;
