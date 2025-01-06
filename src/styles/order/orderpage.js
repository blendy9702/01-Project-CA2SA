import styled from "@emotion/styled";

export const LayoutDiv = styled.div`
  border-top: ${props => `${props.borderTop}px solid var( --color-gray-100)`};
  border-bottom: ${props =>
    `${props.borderBottom}px solid var( --color-gray-100)`};
  .notFound {
    width: 100%;
    height: 100%;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .thum {
      width: 200px;
      height: 200px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
export const ContainerDiv = styled.div`
  padding: 20px;
  border-bottom: ${props =>
    props.borderBottom ? "1px dashed var(--primary-darker)" : "none"};
  .menuName {
    padding-bottom: 8px;
  }
  h2 {
    font-size: 26px;
    font-weight: 700;
  }
  h4 {
    font-weight: 500;
    padding-bottom: 5px;
  }
  .comment {
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 15px;
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
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .menu {
        width: 100%;
        border-bottom: 1px solid var(--color-white);
        padding: 20px;
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
              width: 90px;
              height: 30px;
              border: 1px solid var(--color-gray-300);
              border-radius: 4px;
              button {
                width: 33.3%;
                height: 100%;
                font-size: 13px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: transparent;
                border: none;
              }
              input {
                width: 33.3%;
                height: 100%;
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
    gap: 10px;
    justify-content: flex-start;
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
        font-size: 16px;
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
      width: 95%;
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
    max-width: 640px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    gap: 10px;
    button {
      width: 50%;
      height: 60px;
    }
  }
  .porogress-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    .inProgress {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 36px 0 20px 0;
    }
    p {
      font-size: 14px;
      color: var(--color-gray-700);
    }
  }
  .orderdInfoBox {
    border-bottom: 1px solid var(--color-gray-100);

    .infoDetail {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 0;
      .light {
        font-size: 14px;
        font-weight: 300;
        color: var(--color-gray-700);
      }
      .title {
        font-size: 16px;
        font-weight: bold;
      }
      .menuInfo {
        p {
          font-size: 16px;
          font-weight: bold;
          padding-bottom: 5px;
        }
        ul {
          li {
            font-size: 14px;
            color: var(--color-gray-500);
          }
        }
      }
      .price {
      }
    }
  }
  .order-Info {
    .info {
      border-bottom: 1px dashed var(--primary-darker);

      p {
      }
    }
  }
  .toLink {
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 10px;
    &:last-child {
      padding: 10px;
    }
    button {
      display: flex;
      align-items: center;
      background-color: transparent;
      border: none;
      gap: 10px;
      font-size: 14px;
      color: var(--color-gray-500);
      i {
        color: var(--color-gray-300);
      }
    }
  }
  .total-price {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3 {
      font-weight: bold;
    }
    p {
      font-size: 20px;
      color: var(--primary-color);
      font-weight: bold;
    }
  }
  .info {
    .info-detail {
      display: flex;
      padding-bottom: 5px;
      .info-title {
        width: 75px;
        color: var(--color-gray-700);
      }
    }
  }
  .menuDetail {
    div {
      h4 {
      }
      .info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left {
        }
        .right {
          font-size: 20px;
          font-weight: bold;
        }
      }
    }
  }
`;

export const ThumImageDiv = styled.div`
  width: 100%;
  height: ${props => `${props.height}px`};
  overflow: hidden;
  background-color: #fff;
  text-align: center;
  img {
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
      overflow: hidden;
      margin-bottom: 10px;
      border-radius: 8px;
    }
    .business-number {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 30px;
      border-top: 1px solid var(--color-gray-300);
      padding-top: 10px;
      padding-bottom: 50px;
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
  bottom: 10px;
  /* width: ${props => (props.width ? props.width : "600")}px; */
  max-width: 640px;
  width: 90%;
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
  z-index: 99;
  &:disabled {
    background-color: var(--primary-lighter); /* 회색 배경 */
    color: #fff; /* 어두운 텍스트 */
    cursor: not-allowed; /* 사용 불가 커서 */
    opacity: 1; /* 투명도 */
  }
  .circle {
    width: 17px;
    height: 16px;
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
  max-width: 640px;
  padding: 15px 20px;
  .link-icon {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    background-color: transparent;
    > svg {
      font-size: 24px;
    }
  }
`;

export const CateListDiv = styled.div`
  display: flex;
  gap: 10px;
`;
export const CateButton = styled.button`
  background-color: ${props =>
    props.isSelected ? "var(--secondary-color)" : "#fff"};
  color: ${props => (props.isSelected ? "#fff" : "var(--color-gray-500);")};
  padding: 10px 15px;
  /* border: 1px solid
    ${props => (props.isSelected ? "var(--color-gray-500)" : "transparent")}; */
  border: 0;
  border-radius: 16px;
  cursor: pointer;
  font-size: 16px;
  transition: 0.1s;
`;

export const MemoDiv = styled.div`
  display: ${props => (props.popMemo ? "block" : "none")};
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 640px;
  height: 100%;
  transition: all 0.3s;
  .inner {
    position: relative;
    height: 100%;
    .content {
      position: absolute;
      left: 0;
      bottom: 0px;
      border-top-right-radius: 16px;
      border-top-left-radius: 16px;
      padding: 20px;
      background-color: #fff;
      width: 100%;
      h5 {
        padding-bottom: 30px;
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
  min-width: 75px;
  height: 30px;
  background-color: ${props => (props.selectedTime ? "#cfe799" : "#fff")};
  color: ${props =>
    props.selectedTime ? "var(--primary-darker)" : "var(--color-gray-500)"};
  border: ${props =>
    props.selectedTime
      ? "1px solid var(--primary-darker)"
      : "1px solid var(--color-gray-500)"};
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: 0.1s;
`;

export const OrderProgressDiv = styled.div`
  .ProgressCircle {
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: ${props =>
      props.selectedProgress ? "var(--primary-color)" : "var(--color-white)"};
    color: ${props =>
      props.selectedProgress ? "#fff" : "var(--color-gray-900)"};
  }
  .progressTitle {
    font-size: 14px;
    padding-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MenuDiv = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 0;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-gray-100);
  cursor: pointer;
  .menu-info {
    width: 60%;
  }
  p {
    color: var(--color-gray-500);
    font-size: 14px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-bottom: 7px;
  }

  .menu-thum {
    width: 100px;
    height: 100px;
    border-radius: 8px;
    overflow: hidden;
    margin-left: 20px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const OrderDetailDiv = styled.div``;
export const PeriodButton = styled.button`
  min-width: 50px;
  background-color: ${props =>
    props.isSelected ? "var(--color-gray-900)" : "#fff"};
  color: ${props => (props.isSelected ? "#fff" : "var(--color-gray-500);")};
  padding: 10px;
  border: 1px solid
    ${props =>
      props.isSelected ? "var(--color-gray-500)" : "var(--color-gray-500)"};
  border-radius: 16px;
  cursor: pointer;
  font-size: 16px;
  transition: 0.1s;
`;
