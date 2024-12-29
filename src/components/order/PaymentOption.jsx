import { AlternativeButton } from "../../styles/common";

const PaymentOption = ({ name }) => {
  return <AlternativeButton style={{ width: "30%" }}>{name}</AlternativeButton>;
};

export default PaymentOption;
