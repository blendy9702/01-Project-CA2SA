import { Link } from "react-router-dom";
import { DockBarNav } from "../styles/common";
import { AiFillHome } from "react-icons/ai";
import { HiMiniReceiptPercent } from "react-icons/hi2";
import { BiSolidUser } from "react-icons/bi";
import { useContext } from "react";
import { DockBarContext } from "../contexts/DockBarContext";

function DockBar() {
  const { setDockBar } = useContext(DockBarContext);
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
      <Link
        to="/order"
        onClick={() => {
          setDockBar(false);
        }}
      >
        오더(임시)
      </Link>
    </DockBarNav>
  );
}

export default DockBar;
