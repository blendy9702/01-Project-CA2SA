import moment from "moment/moment";
import { useContext } from "react";
import { OrderContext } from "../../contexts/OrderContext";
import { PickUpTimeButton } from "../../styles/order/orderpage";

const PickUpTime = ({ minutes, selectedTime, onClick }) => {
  const { order, setOrder } = useContext(OrderContext);

  return (
    <PickUpTimeButton
      type="button"
      selectedTime={selectedTime}
      onClick={onClick}
      style={{ width: "23%" }}
    >
      {minutes === 0 ? "지금" : minutes < 60 ? `+${minutes}분` : "1시간 이상"}
    </PickUpTimeButton>
  );
};

export default PickUpTime;
