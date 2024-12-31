import { Link, useLocation } from "react-router-dom";
import { DockBarNav } from "../styles/common";
import { AiFillHome } from "react-icons/ai";
import { HiMiniReceiptPercent } from "react-icons/hi2";
import { BiSolidUser } from "react-icons/bi";
import styled from "@emotion/styled";

const StyledLink = styled(Link, {
  shouldForwardProp: prop => prop !== "isActive", // isActive를 DOM으로 전달하지 않도록 필터링
})`
  color: ${props =>
    props.isActive ? "var(--primary-color)" : "var(--color-gray-900)"};
`;
function DockBar() {
  const location = useLocation();

  const isActive = path => location.pathname === path;

  return (
    <DockBarNav>
      <StyledLink className="" to="/" isActive={isActive("/")}>
        <AiFillHome />홈
      </StyledLink>
      <StyledLink to="/orders" isActive={isActive("/orders")}>
        <HiMiniReceiptPercent />
        주문내역
      </StyledLink>
      <StyledLink to="/mypage" isActive={isActive("/mypage")}>
        <BiSolidUser />
        마이페이지
      </StyledLink>
    </DockBarNav>
  );
}

export default DockBar;
