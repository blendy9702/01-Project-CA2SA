import { MenuDiv } from "../../styles/order/orderpage";

const Menu = ({ item, index, onClick }) => {
  return (
    <MenuDiv onClick={onClick} className="menu">
      <div className="menu-info" style={{ width: 400 }}>
        <h4 style={{ marginBottom: 5 }}>{item.menuName}</h4>
        <p
          style={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            marginBottom: 7,
          }}
        >
          {item.comment}
        </p>
        <h4>{parseInt(item.price).toLocaleString()}원</h4>
      </div>
      <div className="menu-thum">
        {/* <img src={item.menuPic} alt="메뉴 사진" /> */}
        <img
          src={item.menuPic ? item.menuPic : "/images/order/cat.jpg"}
          alt="메뉴 사진"
        />
      </div>
    </MenuDiv>
  );
};
export default Menu;
