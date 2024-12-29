import styled from "@emotion/styled";
import { css } from "styled-components";

export const LayoutDiv = styled.div`
  padding: 0 20px;
  border-top: ${props => `${props.borderTop}px solid var( --color-gray-100)`};
  border-bottom: ${props =>
    `${props.borderBottom}px solid var( --color-gray-100)`};
`;
export const ContainerDiv = styled.div`
  padding: 20px 0 22px 0;
  .menuName {
    padding-bottom: 8px;
  }
  h4 {
    padding-bottom: 17px;
  }
  .comment {
    font-size: 16px;
    font-weight: lighter;
    margin-bottom: 8px;
    color: var(--color-gray-700);
    letter-spacing: -0.5px;
  }
  .menu-price {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
  }
  .orderListBox {
    width: 100%;
    border: 1px solid var(--color-gray-300);
    border-radius: 8px;
    .orderList {
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 15px;
      .menu {
        width: 100%;
        .itemInfo {
          .itemName {
            font-size: 16px;
            font-weight: bold;
          }
          .itemOption span {
            font-size: 12px;
            color: var(--color-gray-500);
          }
          .count-price {
            display: flex;
            align-items: center;
            justify-content: space-between;
            p {
              font-size: 16px;
            }
            .count {
              display: flex;
              height: 30px;
              padding: 0 10px;
              border: 1px solid var(--color-gray-300);
              border-radius: 4px;
              button {
                width: 24px;
                height: 24px;
                font-size: 24px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: transparent;
                border: none;
              }
              input {
                width: 84px;
                text-align: center;
                border: none;
                font-size: 14px;
              }
            }
          }
        }
      }
    }
    .add-menu {
      width: 100%;
      background-color: transparent;
      border-top: 1px solid var(--color-gray-300);
      border-bottom: none;
      border-left: none;
      border-right: none;
      padding: 15px 10px;
      color: var(--primary-color);
      font-size: 14px;
    }
  }
  .pickUpTimeList {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
  .show-memoList {
    display: flex;
    padding: 8.5px 14px;
    align-items: center;
    justify-content: space-between;
    border: 1px solid var(--color-gray-300);
    border-radius: 8px;
  }
  .price {
    .priceBox-a {
      padding: 20px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid var(--color-gray-100);
      p {
        font-size: 14px;
        color: var(--color-gray-500);
      }
    }
    .priceBox-b {
      padding: 20px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      p {
        font-size: 14px;
        font-weight: bold;
      }
      .total {
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
  .paymentOption {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 10px;
    margin-bottom: 10px;
    p {
      font-size: 12px;
      color: var(--color-gray-500);
    }
  }
  .pay {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
    p {
      font-size: 12px;
      color: var(--color-gray-700);
      span {
        text-decoration: underline;
      }
    }
    button {
      height: 60px;
      width: 100%;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .button-box {
    display: flex;
    padding: 0 20px;
    width: 640px;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
    gap: 10px;
    button {
      width: 50%;
      height: 60px;
    }
  }
`;

export const ThumImageDiv = styled.div`
  width: 100%;
  height: ${props => `${props.height}px`};
  background-color: lightgray;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ContentDiv = styled.div`
  width: 100%;

  .title-box {
    display: flex;
    align-items: center;
    height: 69px;
    border-bottom: 1px solid var(--color-gray-300);
  }
  .cafe-info {
    padding: 20px 0;
    border-bottom: 1px solid var(--color-gray-300);
    h3 {
      margin-bottom: 20px;
    }
    .info-box {
      display: flex;
      height: 38px;
      gap: 27px;
      margin-bottom: 10px;
      .info-subtitle {
        font-size: 16px;
        width: 54px;
        color: var(--color-gray-500);
      }
      .info-detail {
        .tel {
          text-decoration: underline;
        }
        p {
          font-size: 16px;
          color: var(--color-gray-900);
        }
      }
    }
    .last {
      margin-bottom: 20px;
    }
    .map {
      width: 100%;
      height: 209px;
      background-color: darkgray;
      margin-bottom: 10px;
      border-radius: 8px;
    }
    .business-number {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: 97px;
      p {
        color: var(--color-gray-700);
        font-size: 12px;
        margin-right: 5px;
      }
      .icon {
        color: var(--color-gray-700);
        width: 12px;
        height: 12px;
      }
    }
  }
`;

export const OrderButton = styled.button`
  position: fixed;
  left: 50%;
  height: 60px;
  transform: translateX(-50%);
  bottom: 80px;
  width: ${props => (props.width ? props.width : "600")}px;
  background-color: ${props =>
    props.color ? props.color : "var(--primary-color)"};
  color: #fff;
  padding: 10px;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: 0.1s;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  .circle {
    width: 14px;
    height: 15px;
    background-color: #fff;
    border-radius: 50%;
    color: var(--primary-color);
    font-size: 12px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:active {
    background-color: var(--primary-darker);
  }
`;

export const NavBarDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #fff;

  width: 100%;
  padding: 15px 20px;
  .link-icon {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 24px;
    border: none;
    background-color: transparent;
  }
`;

export const CateListDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
`;
export const CateButton = styled.button`
  background-color: ${props =>
    props.isSelected ? "var(--color-gray-900)" : "#fff"};
  color: ${props => (props.isSelected ? "#fff" : "var(--color-gray-500);")};
  padding: 10px 15px;
  border: 1px solid
    ${props => (props.isSelected ? "var(--color-gray-500)" : "transparent")};
  border-radius: 16px;
  cursor: pointer;
  font-size: 16px;
  transition: 0.1s;
`;

export const MemoDiv = styled.div`
  background-color: var(--color-gray-900);
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 640px;
  height: 100%;
  .inner {
    position: relative;
    height: 100%;
    .content {
      position: absolute;
      left: 0;
      bottom: 70px;
      border-top-right-radius: 16px;
      border-top-left-radius: 16px;
      padding: 20px;
      background-color: #fff;
      width: 100%;
      h5 {
        padding-bottom: 15px;
      }
      .inputList {
        display: flex;
        flex-direction: column;
        gap: 26px;
        margin-bottom: 20px;
      }
      .searchInput {
        outline: none;
        width: 100%;
        height: 50px;
        font-size: 16px;
        margin-bottom: 20px;
      }
      button {
        width: 100%;
        height: 60px;
      }
    }
  }
`;
export const CustomInputDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  input {
    display: none;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    outline: none;
  }
  input:checked + label {
    padding-left: 25px;
    background: url("/images/order/CheckboxOn.png") no-repeat;
  }
  label {
    display: flex;
    align-items: center;
    padding-left: 25px;
    background: url("/images/order/checkboxOff.png") no-repeat;
  }
`;

export const PickUpTimeButton = styled.button`
  background-color: ${props => (props.selectedTime ? "#cfe799" : "#fff")};
  color: ${props =>
    props.selectedTime ? "var(--primary-darker)" : "var(--color-gray-500)"};
  padding: 10px;
  border: ${props =>
    props.selectedTime
      ? "1px solid var(--primary-darker)"
      : "1px solid var(--color-gray-500)"};
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: 0.1s;
`;
