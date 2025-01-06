import styled from "@emotion/styled";

export const LoginTopArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  font-size: 20px;
  font-weight: 700;
`;

export const LoginMainWrap = styled.div``;

export const ServiceTextArea = styled.div`
  margin-top: 200px;
  color: #616161;
  font-size: 16px;
  font-family: 300;
  padding-bottom: 10px;
  span {
    color: var(--color-gray-700);
  }

  .ca2sa {
    color: #88c200;
    font-size: 36px;
    font-weight: 700;
  }
`;
export const LoginWrap = styled.div`
  padding-top: 16px;
  font-weight: 300;
  color: #483a4b;
  input {
    width: 100%;
    height: 50px;
    font-size: 16px;
    font-weight: 300;
    padding-left: 10px;
    border-radius: 8px;
    border: 1px solid var(--color-gray-300);
    color: var(--color-gray-500);
    outline: none;
    transition: 0.1s;
  }
  input:focus {
    border-color: var(--primary-color);
    color: var(--color-gray-700);
  }
`;

export const EmailArea = styled.div`
  padding-bottom: 15px;
  p {
    font-size: 14px;
    margin: 5px 3px;
  }
`;

export const PasswordArea = styled.div`
  p {
    font-size: 14px;
    margin: 5px 3px;
  }
`;

export const LoginButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 30px;
  padding-bottom: 10px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 700;
    color: white;
    background-color: #88c200;
    border: 0px solid #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #648f00;
    }

    &:active {
      background-color: #648f00;
    }
  }
`;

export const SignUpButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 700;
  color: white;
  background-color: #483a4b;
  border: 0px solid #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #352838;
  }

  &:active {
    background-color: #352838;
  }
`;

export const JustBox = styled.div`
  width: 100%;
  height: 400px;
`;
