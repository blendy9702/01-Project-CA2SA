import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { OrderContext } from "../../contexts/OrderContext";
import { PrimaryButton } from "../../styles/common";
import { ModalDiv, ModalButton } from "../../styles/order/BucketModal";

const BucketModal = ({ showPopUp, setShowPopup, cafeInfo }) => {
  console.log(cafeInfo.cafeId);
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  const userId = userData.resultData.userId;
  const { setOrder, order } = useContext(OrderContext);
  const navigate = useNavigate();
  const handleClickButton = () => {
    setShowPopup(false);
    setOrder({
      ...order,
      pickUpTime: "",
      memo: "",
      cafeId: parseInt(cafeInfo.cafeId),
      menuList: [],
      // orderTime: "",
    });
  };
  return (
    <ModalDiv>
      <div className="inner">
        <div className="container">
          <div className="content">
            <p className="main">
              장바구니에는 같은 가게의 메뉴만 담을 수 있습니다.
            </p>
            <p className="sub">
              선택하신 메뉴를 장바구니에 담을 경우 이전에 담은 메뉴가
              <br />
              삭제됩니다.
            </p>
          </div>
          <div className="button-box">
            <ModalButton
              type="button"
              onClick={() => {
                navigate(`/order/menu?cafeId=${order.cafeId}`);
                setShowPopup(false);
              }}
            >
              취소
            </ModalButton>
            <PrimaryButton type="button" onClick={() => handleClickButton()}>
              담기
            </PrimaryButton>
          </div>
        </div>
      </div>
    </ModalDiv>
  );
};

export default BucketModal;
