import styled from "@emotion/styled";

export const JoinPageWrap = styled.div``;
export const JoinPageTopArea = styled.div`
  display: flex;
`;
export const JoinPageTopBackOff = styled.div``;
export const JoinPageTopText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding-left: 260px;
  margin-top: 10px;
`;

export const JoinPageMainWrap = styled.div``;

export const JoinPageTextArea = styled.div`
  p {
    font-size: 12px;
    margin-top: 10px;
    margin-bottom: 2px;
  }
  span {
    font-size: 20px;
    font-weight: 700;
    display: flex;
    padding-top: 50px;
  }
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

export const JoinPageNickName = styled.div``;
export const JoinPageEmail = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  input {
    width: 100%;
    padding-right: 100px;
    box-sizing: border-box;
  }

  button {
    position: absolute;
    border-radius: 8px;
    font-size: 12px;
    top: 37px;
    right: 10px;
    padding: 5px 10px;
    border: 2px solid rgb(201, 201, 201);
    outline: none;
    transition: border-color 0.3s ease;
  }
  button:focus {
    border-color: #88c200;
  }
  button:active {
    transform: translateY(0);
  }
`;
export const JoinPagePassword = styled.div``;
export const JoinPageCheckArea = styled.div`
  padding-top: 70px;
`;
export const ServiceCheckBox = styled.div``;
export const EssentialRadioBox = styled.div`
  padding-top: 30px;
`;
export const ChoiceRadioBox = styled.div`
  padding-top: 10px;
`;
export const JoinPageMoveNext = styled.div``;
export const JustBox = styled.div`
  width: 100%;
  height: 200px;
`;
