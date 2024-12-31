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
        {progress === 1 && <FaReceipt style={{ fontSize: 24 }} />}
        {progress === 2 && <BiSolidTimer style={{ fontSize: 24 }} />}
        {progress === 3 && <BiSolidShoppingBagAlt style={{ fontSize: 24 }} />}
        {progress === 4 && <AiFillCheckCircle style={{ fontSize: 24 }} />}
      </div>
      <p>
        {progress === 1 && "주문접수"}
        {progress === 2 && "준비중"}
        {progress === 3 && "준비완료"}
        {progress === 4 && "수령완료"}
      </p>
    </OrderProgressDiv>
  );
});
export default OrderProgress;
