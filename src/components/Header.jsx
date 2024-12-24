import { FiSearch } from "react-icons/fi";

function Header() {
  return (
    <div>
      <div>
        <h1>logo</h1>
        <FiSearch />
      </div>
      <div>
        <button>리스트로 주문</button>
        <button>지도로 주문</button>
      </div>
    </div>
  );
}

export default Header;
