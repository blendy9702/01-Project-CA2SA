import styled from "@emotion/styled";

export const JoinPageWrap = styled.div`
  margin: 0 20px;
`;
export const JoinPageTopArea = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
`;
export const JoinPageTopBackOff = styled.div``;
export const JoinPageTopText = styled.div`
  width: 100%;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;

export const JoinPageMainWrap = styled.div``;

export const JoinPageTextArea = styled.div`
  p {
    font-size: 14px;
    color: var(--color-gray-700);
    margin-bottom: 3px;
    margin-left: 3px;
  }
  span {
    display: inline-block;
    font-size: 20px;
    font-weight: 700;
    padding: 30px 0;
  }
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
    border-color: var(--primary-color);
  }
`;

export const JoinPageNickName = styled.div``;
export const JoinPageEmail = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  input {
    width: 100%;
  }

  button {
    position: absolute;
    border-radius: 8px;
    font-size: 12px;
    top: 33px;
    right: 10px;
    padding: 5px 10px;
    outline: none;
    border: 0;
    transition: border-color 0.3s ease;
    background-color: var(--color-gray-900);
    color: #f5f5f5;
    cursor: pointer;
    &:disabled {
      color: var(--color-gray-500);
      background-color: var(--color-gray-100);
      border: 1px solid var(--color-gray-300);
    }
  }
  button.active {
    background-color: var(--primary-color);
    color: white;
    border-color: var(--primary-color);
  }
  button:focus {
    border-color: var(--primary-color);
  }
  button:active {
    transform: translateY(0);
  }
`;
export const JoinPagePassword = styled.div`
  input {
  }
`;
export const JoinPageCheckArea = styled.div`
  padding-top: 70px;
`;
export const ServiceCheckBox = styled.div`
  padding-top: 15px;
  accent-color: var(--primary-color);
  display: flex;
  align-items: center;
  span {
    padding-left: 10px;
    color: var(--color-gray-700);
    font-size: 14px;
  }
  input {
    position: relative;
    width: 14px;
    height: 14px;
    appearance: none;
    border: 1px solid var(--color-gray-500);
    border-radius: 2px;
    cursor: pointer;
    &:checked {
      background-color: var(--primary-color); /* 체크된 상태의 색상 */
      border-color: var(--primary-color);
    }
    &:checked::after {
      content: "✓	";
      color: #fff;
      font-size: 10px;
      position: absolute;
      top: -0.6px;
      left: 1.6px;
    }
  }
`;
export const EssentialRadioBox = styled.div`
  appearance: none;
  display: flex;
  align-items: center;

  span {
    padding-left: 10px;
    color: var(--color-gray-500);
    font-size: 14px;
    > a {
      color: var(--color-gray-500) !important;
    }
  }

  input {
    width: 14px;
    height: 14px;
    border: 1px solid var(--color-gray-500);
    border-radius: 50%;
    appearance: none;
    outline: none;
    cursor: pointer;
    position: relative;

    &:checked {
      border-color: var(--primary-color);
    }

    &:checked::before {
      content: "";
      width: 8px;
      height: 8px;
      background-color: var(--primary-color);
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
export const ChoiceRadioBox = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;
  span {
    padding-left: 10px;
    color: var(--color-gray-500);
    font-size: 14px;
    > a {
      color: var(--color-gray-500) !important;
    }
  }
  input {
    width: 14px;
    height: 14px;
    border: 1px solid var(--color-gray-500);
    border-radius: 50%;
    appearance: none;
    outline: none;
    cursor: pointer;
    position: relative;

    &:checked {
      border-color: var(--primary-color);
    }

    &:checked::before {
      content: "";
      width: 8px;
      height: 8px;
      background-color: var(--primary-color);
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
export const JoinPageMoveNext = styled.div`
  padding-top: 20px;

  button {
    width: 100%;
    height: 60px;
    border-radius: 8px;
    border: 0px solid rgb(201, 201, 201);
    outline: none;
    background-color: var(--primary-lighter);
    color: #f5f5f5;
    font-size: 18px;
    font-weight: 700;
    cursor: not-allowed;
    transition: all 0.3s ease;

    &:not(:disabled) {
      background-color: var(--primary-color);
      color: white;
      cursor: pointer;
    }

    &:hover:not(:disabled) {
      background-color: #76b000;
    }

    &:active:not(:disabled) {
      background-color: #699600;
      transform: scale(0.98);
    }
  }
`;
