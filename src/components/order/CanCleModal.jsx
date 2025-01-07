import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { OrderContext } from "../../contexts/OrderContext";
import { PrimaryButton } from "../../styles/common";
import { ModalDiv, ModalButton } from "../../styles/order/BucketModal";
import axios from "axios";

const CancleModal = ({ showCancleModal, setShowCancleModal, orderId }) => {
  const { setOrder, order } = useContext(OrderContext);
  // const userId = order.userId;
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  const userId = userData.resultData.userId;
  const navigate = useNavigate();
  const handleClickButton = async () => {
    try {
      const res = await axios.patch(
        `/api/order/cancel?orderId=${orderId}&signedUserId=${userId}`,
      );
      const resultData = res.data.resultData;
      console.log(res.data);
      if (resultData === 1) {
        navigate("/orders");
        setShowCancleModal(false);
      }
    } catch (error) {
      console.log("주문 취소:", error);
    }
  };
  return (
    <ModalDiv>
      <div className="inner">
        <div className="container">
          <div className="content">
            <p className="main">주문을 취소하시겠습니까?.</p>
            <p className="sub">
              취소 버튼을 누르실 경우, 해당 주문이 취소됩니다.
            </p>
          </div>
          <div className="button-box">
            <ModalButton
              type="button"
              onClick={() => {
                setShowCancleModal(false);
              }}
            >
              취소
            </ModalButton>
            <PrimaryButton type="button" onClick={() => handleClickButton()}>
              확인
            </PrimaryButton>
          </div>
        </div>
      </div>
    </ModalDiv>
  );
};

export default CancleModal;
