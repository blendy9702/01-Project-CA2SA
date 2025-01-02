import { OrderProgressDiv } from "../../styles/order/orderpage";
import { FaReceipt } from "react-icons/fa";
import { BiSolidTimer } from "react-icons/bi";
import { BiSolidShoppingBagAlt } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";
import React from "react";
const OrderProgress = React.memo(({ progress, selectedProgress }) => {
  return (
    <OrderProgressDiv selectedProgress={selectedProgress}>
      <div className="ProgressCircle">
        {progress === 0 && <FaReceipt style={{ fontSize: 24 }} />}
        {progress === 1 && <BiSolidTimer style={{ fontSize: 24 }} />}
        {progress === 2 && <BiSolidShoppingBagAlt style={{ fontSize: 24 }} />}
        {progress === 3 && <AiFillCheckCircle style={{ fontSize: 24 }} />}
      </div>
      <p>
        {progress === 0 && "주문접수"}
        {progress === 1 && "준비중"}
        {progress === 2 && "준비완료"}
        {progress === 3 && "수령완료"}
      </p>
    </OrderProgressDiv>
  );
});
export default OrderProgress;
