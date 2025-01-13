import styled from "@emotion/styled";
import { BsTypeBold } from "react-icons/bs";

export const MyPageDiv = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    font-size: 20px;
    font-weight: 700;
  }
  button {
    color: var(--color-gray-700);
    font-size: 16px;
    font-weight: 500;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

export const ProfileArea = styled.div`
  a {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 30px;
    height: 30px;
    background-color: var(--color-gray-900);
    border-radius: 50%;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const ProfileImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  width: 100%;

  div {
    position: relative;
    height: 100px;
    width: 100px;
  }
  a {
    > svg {
      font-size: 14px;
    }
  }
`;

export const PaymentArea = styled.div`
  padding: 20px;
  box-shadow: 0 0 3px 0px #dbdbdb;
  border-radius: 16px;
  margin: 30px 0;
  p {
    color: var(--color-gray-700);
    margin-bottom: 20px;
  }
`;

export const PaymentDiv = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 28px;
    font-weight: 700;
    color: var(--color-gray-900);
  }
  .consumer {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 60%,
      var(--primary-lighter) 50%
    );
  }

  button {
    background-color: var(--color-white);
    color: var(--primary-color);
    font-size: 14px;
    font-weight: 500;
    border: 0px solid #fff;
    border-radius: 8px;
    padding: 7px 10px;
    cursor: pointer;
    margin-left: auto;
  }
  .won {
    font-size: 20px;
    font-weight: 500;
    margin-left: 2px;
    color: var(--color-gray-700);
  }
`;

export const ProfileInfoArea = styled.div`
  position: relative;
  p {
    color: var(--color-gray-900);
    font-size: 14px;
    font-weight: 500;
    margin: 20px 0 5px 3px;
  }
  input {
    color: var(--color-gray-700);
    width: 100%;
    height: 50px;
    font-size: 16px;
    font-weight: 300;
    padding-left: 10px;
    border-radius: 8px;
    border: 1px solid var(--color-gray-300);
    outline: none;
    transition: border-color 0.3s ease;
  }

  .noneFocus {
    outline: none;
    border-color: var(--color-gray-300);
    background-color: var(--color-gray-100);
    color: var(--color-gray-500);
    cursor: auto;
  }
`;

export const NicknameButton = styled.button`
  position: absolute;
  border-radius: 8px;
  font-size: 12px;
  top: 33px;
  right: 10px;
  padding: 5px 10px;
  border: 1px solid var(--color-gray-300);
  outline: none;
  transition: border-color 0.3s all;
  cursor: pointer;

  &:hover {
    background-color: var(--color-gray-900);
    color: #f5f5f5;
    border-color: #9e9e9e;
  }
`;

export const InputFocus = styled.input`
  &:focus {
    border-color: ${props =>
      props.updataNick ? `#88c200` : `rgb(201,201,201)`};
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  a {
    display: inline-block;
    width: 100%;
    height: 50px;
    div {
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      color: var(--color-gray-700);
      svg {
        color: var(--color-gray-300);
        margin-right: 10px;
        &:last-child {
          margin-left: auto;
        }
      }
    }
  }
`;
export const InfoBox_3 = styled.div`
  button {
    text-align: left;
    width: 100%;
    height: 50px;
    font-size: 16px;
    color: var(--color-gray-700);
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

export const ModalArea = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: fixed;
  width: 250px;
  left: 50%;
  top: 50%;
  padding: 20px;
  border-radius: 16px;
  transform: translate(-50%, -50%);
  background-color: #fff;
  svg {
    font-size: 28px;
    color: var(--secondary-color);
  }
  p {
    text-align: center;
    color: var(--color-gray-700);
    margin: 5px 0 15px 0;
  }

  input {
    width: 100%;
    height: 40px;
    font-size: 16px;
    padding-left: 10px;
    border-radius: 8px;
    outline: none;
    border: 1px solid var(--color-gray-300);
    transition: border-color 0.3s ease;
  }
  input:focus {
    border-color: var(--primary-color);
  }

  div {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    gap: 10px;
    button {
      width: 50%;
      height: 40px;
      border-radius: 8px;
      font-size: 14px;
      padding: 10px;
      outline: none;
      border: 0;
      transition: border-color 0.3s;
      background-color: var(--primary-color);
      color: var(--color-white);
      cursor: pointer;
      &:last-child {
        background-color: var(--secondary-color);
      }
    }
  }
`;
