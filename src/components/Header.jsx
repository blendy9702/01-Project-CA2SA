import { FiSearch } from "react-icons/fi";
import styled from "styled-components";
import ListMain from "./main/ListMain";
import MapMain from "./main/MapMain";
import { useState } from "react";
import axios from "axios";

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

const TabMenuBtn = styled.div`
  width: 50%;
  height: 45px;
  line-height: 45px;
  font-size: 18px;
  background: none;
  border: 0;
  text-align: center;
  font-weight: 500;
  cursor: pointer;
  border-bottom: ${props =>
    props.$isActiveIndex
      ? "3px solid var(--secondary-color)"
      : "1px solid var(--color-gray-500)"};
  color: ${props =>
    props.$isActiveIndex ? "var(--secondary-color)" : "var(--color-gray-500"};
`;

function Header() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <HeaderWrap>
        <h1>
          <img src="images/ca2saLogo.png" alt="logo" />
        </h1>
        <FiSearch />
      </HeaderWrap>
      <div style={{ display: "flex" }}>
        <TabMenuBtn
          $isActiveIndex={activeIndex === 0}
          onClick={() => setActiveIndex(0)}
        >
          리스트로 주문하기
        </TabMenuBtn>
        <TabMenuBtn
          $isActiveIndex={activeIndex === 1}
          onClick={() => setActiveIndex(1)}
        >
          지도로 주문하기
        </TabMenuBtn>
      </div>
      {activeIndex === 0 && <ListMain />}
      {activeIndex === 1 && <MapMain />}
    </div>
  );
}

export default Header;
