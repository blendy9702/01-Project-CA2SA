import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";

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
  return (
    <div>
      <HeaderWrap>
        <h1>
          <img src="images/ca2saLogo.png" alt="logo" />
        </h1>
        <FiSearch />
      </HeaderWrap>
    </div>
  );
}

export default Header;
