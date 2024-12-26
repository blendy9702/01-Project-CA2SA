import moment from "moment/moment";
import { useContext } from "react";
import { OrderContext } from "../../contexts/OrderContext";

const PickUpTime = ({ minutes }) => {
  const { order, setOrder } = useContext(OrderContext);

  const now = moment();
  const handleClickPickUpTime = minutes => {
    const nowTime = now.format("YYYY-MM-DD HH:mm:ss");
    const addMinutes = now
      .add(minutes, "minutes")
      .format("YYYY-MM-DD HH:mm:ss");
    setOrder({ ...order, pickUpTime: addMinutes, orderTime: nowTime });
  };

  return (
    <div>
      <button type="button" onClick={() => handleClickPickUpTime(minutes)}>
        {minutes === 0 ? "지금" : minutes < 60 ? `+${minutes}분` : "1시간 이상"}
      </button>
    </div>
  );
};

export default PickUpTime;
