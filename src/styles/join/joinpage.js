import styled from "@emotion/styled";

export const LoginTopArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LoginMainWrap = styled.div``;

export const ServiceTextArea = styled.div`
  margin-top: 200px;

  .ca2sa {
    color: #88c200;
    font-size: 46px;
    font-weight: 700;
  }
`;
export const LoginWrap = styled.div`
  padding-top: 20px;
  font-weight: 500;
  input {
    width: 50%;
    height: 50px;
    padding: 10px;
    margin-top: 5px;
    font-size: 16px;
    border-radius: 12px;
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
`;

export const LoginButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding-top: 50px;
  padding-bottom: 10px;

  button {
    width: 100%;
    height: 60px;
    border-radius: 12px;
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

export const SignUpButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;

  button {
    width: 100%;
    height: 60px;
    border-radius: 12px;
    font-size: 18px;
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
  }
`;
