import styled from "@emotion/styled";

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
  margin: 50px;
  div {
    position: relative;
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
`;

export const ProfileInfoArea = styled.div`
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
  input:focus {
    border-color: #88c200;
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
