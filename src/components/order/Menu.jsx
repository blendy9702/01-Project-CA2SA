const Menu = ({ item, index, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="menu"
      style={{
        display: "flex",
        width: "100%",
        padding: "20px 0",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid var(--color-gray-100)",
        cursor: "pointer",
      }}
    >
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
      <div
        className="menu-thum"
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "8px",
          overflow: "hidden",
          marginLeft: "20px",
        }}
      >
        {/* <img src={item.menuPic} alt="메뉴 사진" /> */}
        <img
          src={item.menuPic ? item.menuPic : "/images/order/cat.jpg"}
          alt="메뉴 사진"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </div>
  );
};
export default Menu;
