import styled from "@emotion/styled";

export const ConfirmWrap = styled.div`
  margin: 0 20px;
`;
export const ConfirmTopArea = styled.div``;
export const ConfirmBackOff = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
`;
export const ConfirmTopText = styled.div`
  width: 100%;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;
export const ConfirmCodeArea = styled.div``;
export const ConfirmMainText = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin: 20px 0;
`;
export const ConfirmEmailArea = styled.div``;
export const ConfirmEmailSend = styled.div`
  font-size: 16px;
  span {
    color: var(--color-gray-500);
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
    border: 1px solid var(--color-gray-300);
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
  top: 38px;
  right: 15px;
`;

export const ConfirmResendEmail = styled.div`
  padding-top: 10px;
  p {
    font-size: 12px;
    color: var(--color-gray-500);
  }
  button {
    display: inline;
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
  padding-top: 70px;
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
    background-color: var(--primary-color);
    border: 0px solid #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: var(--primary-darker);
    }

    &:active {
      background-color: var(--primary-darker);
    }
  }
`;
