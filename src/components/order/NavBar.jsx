import { IoIosArrowBack } from "react-icons/io";
import { NavBarDiv } from "../../styles/order/orderpage";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const NavBar = ({ onClick, icon, title }) => {
  const navigation = useNavigate();

  // 스크롤 Y 이동에 따라 네비게이션 여부
  const [showNav, setShowNav] = useState(true);
  // useEffect(() => {
  //   if (!scrollevent) {
  //     setShowNav(true); // scrollevent가 false이면 항상 보이게 설정
  //     return;
  //   }

  //   const handleScroll = () => {
  //     console.log("스크롤에 따른 이벤트가 작동중입니다.");
  //     if (window.scrollY > 100) {
  //       setShowNav(true);
  //     } else {
  //       setShowNav(false);
  //     }
  //   };

  //   // 스크롤 이벤트 리스너 추가
  //   window.addEventListener("scroll", handleScroll);

  //   // 컴포넌트가 언마운트될 때 리스너 제거
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [scrollevent]); // scrollevent가 변경될 때마다 실행

  return (
    <NavBarDiv
      style={{
        display: `${showNav ? "flex" : "none"}`,
      }}
    >
      <button className="link-icon" onClick={onClick}>
        {icon === "close" ? "X" : <IoIosArrowBack />}
      </button>
      <h3 className="navbar-title">{title ? title : "title 없음"}</h3>
    </NavBarDiv>
  );
};

export default NavBar;
