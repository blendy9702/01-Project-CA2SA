import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const HeaderWrap = styled.div`
  width: 100%;
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  h1 {
    height: 40px;
    margin-right: auto;
    img {
      height: 100%;
    }
  }
  svg {
    font-size: 24px;
    cursor: pointer;
  }
`;

function Header() {
  const search = useNavigate();
  const handleClickSearch = () => {
    // 추가 로직 (예: 검색어 저장, 로그 등)
    search("/search");
  };
  return (
    <div>
      <HeaderWrap>
        <h1>
          <img src="images/ca2saLogo.png" alt="logo" />
        </h1>
        <FiSearch onClick={handleClickSearch} />
      </HeaderWrap>
    </div>
  );
}

export default Header;
