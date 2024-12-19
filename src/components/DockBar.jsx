import { Link } from "react-router-dom";
import { DockBarNav } from "../styles/common";
import { AiFillHome } from "react-icons/ai";
import { HiMiniReceiptPercent } from "react-icons/hi2";
import { BiSolidUser } from "react-icons/bi";

function DockBar() {
  return (
    <DockBarNav>
      <Link to="/">
        <AiFillHome />홈
      </Link>
      <Link to="/orders">
        <HiMiniReceiptPercent />
        주문내역
      </Link>
      <Link to="/mypage">
        <BiSolidUser />
        마이페이지
      </Link>
    </DockBarNav>
  );
}

export default DockBar;
