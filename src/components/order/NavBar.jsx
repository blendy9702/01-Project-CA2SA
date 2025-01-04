import { IoClose } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { NavBarDiv } from "../../styles/order/orderpage";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// onClick: 좌상단 아이콘 클릭 시 네비게이션용 함수
// icon: 좌상단 아이콘 모양 (뒤로가기, 닫기)
// title: 중앙 타이틀
const NavBar = ({ onClick, icon, title }) => {
  const navigation = useNavigate();

  // 스크롤 Y 이동에 따라 네비게이션 여부
  const [showNav, setShowNav] = useState(true);

  return (
    <NavBarDiv
      style={{
        display: `${showNav ? "flex" : "none"}`,
      }}
    >
      <button className="link-icon" onClick={onClick}>
        {icon === "close" ? <IoClose /> : <IoIosArrowBack />}
      </button>
      <h3 className="navbar-title">{title ? title : ""}</h3>
    </NavBarDiv>
  );
};

export default NavBar;
