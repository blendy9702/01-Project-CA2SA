import styled from "@emotion/styled";

export const ConfirmWrap = styled.div``;
export const ConfirmTopArea = styled.div`
  display: flex;
`;
export const ConfirmBackOff = styled.div`
  display: flex;
`;
export const ConfirmTopText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  padding-left: 250px;
  padding-top: 10px;
`;
export const ConfirmCodeArea = styled.div`
  padding-top: 40px;
`;
export const ConfirmMainText = styled.div`
  font-size: 20px;
  font-weight: 700;
`;
export const ConfirmEmailArea = styled.div``;
export const ConfirmEmailSend = styled.div`
  padding-top: 30px;
  padding-bottom: 15px;
  font-size: 16px;
  span {
    color: #9e9e9e;
  }
`;
export const EmailVerification = styled.div`
  position: relative;
  input {
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
export const AuthTimer = styled.div`
  display: flex;
  position: absolute;
  top: 33px;
  right: 10px;
`;

export const ConfirmResendEmail = styled.div`
  padding-top: 10px;
  p {
    font-size: 12px;
    color: #9e9e9e;
  }
  button {
    display: flex;
    background: none;
    border: none;
    color: #88c200;
    font-size: 12px;
    padding: 0;
    padding-left: 3px;
    text-decoration-line: underline;
    cursor: pointer;
  }
`;
export const ComfirmDone = styled.div`
  padding-top: 50px;
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
      background-color: #5e8c00;
    }

    &:active {
      background-color: #5e8c00;
    }
  }
`;
