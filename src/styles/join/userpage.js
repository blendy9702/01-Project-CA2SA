import styled from "@emotion/styled";
import { BsTypeBold } from "react-icons/bs";

export const MyPageDiv = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    font-size: 20px;
    font-weight: 700;
  }
  button {
    color: #616161;
    font-size: 16px;
    font-weight: 500;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

export const ProfileArea = styled.div`
  p {
    display: flex;
  }
  a {
    position: absolute;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 0;
    bottom: 0;
    width: 30px;
    height: 30px;
    background-color: #212121;
    border-radius: 50%;
    color: white;
    text-decoration: none;
  }
`;
export const ProfileImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
  position: relative;
  width: 100px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    overflow: hidden;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  a {
    position: absolute;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 0;
    bottom: 0;
    width: 30px;
    height: 30px;
    background-color: #212121;
    border-radius: 50%;
    color: white;
    text-decoration: none;
  }
`;

export const ProfileInfoArea = styled.div`
  position: relative;
  p {
    color: #212121;
    font-size: 12px;
    font-weight: 500;
    padding-top: 20px;
  }
  input {
    color: #616161;
    width: 100%;
    height: 50px;
    font-size: 16px;
    font-weight: 300;
    padding-left: 10px;
    border-radius: 8px;
    border: 2px solid rgb(201, 201, 201);
    outline: none;
    transition: border-color 0.3s ease;
  }

  .noneFocus:focus {
    outline: none;
    border-color: rgb(201, 201, 201);
  }
`;

export const NicknameButton = styled.button`
  position: absolute;
  border-radius: 8px;
  font-size: 12px;
  top: 46px;
  right: 10px;
  padding: 5px 10px;
  border: 1px solid rgb(201, 201, 201);
  outline: none;
  transition: border-color 0.3s all;
  cursor: pointer;

  &:hover {
    background-color: #212121;
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
    color: #616161;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;
