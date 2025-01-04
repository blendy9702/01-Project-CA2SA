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

export const ProfileImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
  div {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100px;
    overflow: hidden;
    img {
      object-fit: cover;
      border-radius: 50%;
      width: 100%;
      height: 100%;
    }
  }
`;

export const ProfileArea = styled.div`
<<<<<<< HEAD
  position: relative;
  overflow: visible;
  p {
    display: flex;
  }
=======
>>>>>>> b94fd85bb30a960c5954cf11b3a9c4476caf9ec3
  a {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 30px;
    height: 30px;
    background-color: var(--color-gray-900);
    border-radius: 50%;
<<<<<<< HEAD
    color: white;
    text-decoration: none;
    z-index: 999;
=======
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
>>>>>>> b94fd85bb30a960c5954cf11b3a9c4476caf9ec3
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

export const InfoBox_1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-top: 5px;
  color: #9e9e9e;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 13px 10px;
  }
`;
export const InfoBox_2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-top: 5px;
  color: #9e9e9e;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 13px 10px;
  }
`;
export const InfoBox_3 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-top: 5px;
  color: #9e9e9e;
  button {
    margin: 13px 10px;
    font-size: 16px;
    color: var(--color-gray-700);
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;
