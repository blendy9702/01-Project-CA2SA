import styled from "@emotion/styled";

export const LoginTopArea = styled.div`
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: 700;
  }
`;

export const LoginMainWrap = styled.div``;

export const ServiceTextArea = styled.div`
  margin-top: 200px;
  color: #616161;
  font-size: 24px;
  padding-bottom: 10px;

  .ca2sa {
    color: #88c200;
    font-size: 60px;
    font-weight: 700;
  }
`;
export const LoginWrap = styled.div`
  padding-top: 20px;
  font-weight: 500;
  input {
    width: 100%;
    height: 80px;
    padding-left: 20px;
    margin-top: 5px;
    font-size: 24px;
    border-radius: 16px;
    border: 2px solid rgb(201, 201, 201);
    outline: none;
    transition: border-color 0.3s ease;
  }
  input:focus {
    border-color: #88c200;
  }
`;

export const EmailArea = styled.div`
  padding-bottom: 15px;
  p {
    font-size: 26px;
  }
`;

export const PasswordArea = styled.div`
  p {
    font-size: 26px;
  }
`;

export const LoginButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 15px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    border-radius: 16px;
    font-size: 36px;
    font-weight: 700;
    padding: 50px;
    color: white;
    background-color: #88c200;
    border: 0px solid #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #5e8c00;
    }

    &:active {
      background-color: #5e8c00;
    }
  }
`;

export const SignUpButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  border-radius: 16px;
  font-size: 36px;
  font-weight: 700;
  color: white;
  background-color: rgb(39, 39, 39);
  border: 0px solid #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(104, 104, 104);
  }

  &:active {
    background-color: rgb(104, 104, 104);
  }
`;

export const JustBox = styled.div`
  width: 100%;
  height: 400px;
`;
