const Menu = ({ item, index }) => {
  return (
    <div style={{ display: "flex" }}>
      <div className="menu-info">
        <h4>{item.menuName}</h4>
        <p>{item.comment}</p>
        <h4>{item.price}</h4>
      </div>
      <div className="menu-thum">
        <img src={item.menuPic} alt="메뉴 사진" />
      </div>
    </div>
  );
};
export default Menu;
