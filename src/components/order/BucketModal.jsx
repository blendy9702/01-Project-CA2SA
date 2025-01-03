import React, { useContext } from "react";
import { PrimaryButton } from "../../styles/common";
import { BucketModalDiv, CancleButton } from "../../styles/order/BucketModal";
import { CateButton } from "../../styles/order/orderpage";
import { OrderContext } from "../../contexts/OrderContext";
import MenuList from "../../pages/order/MenuList";
import { useNavigate } from "react-router-dom";

const BucketModal = ({ showPopUp, setShowPopup, cafeInfo }) => {
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
    <BucketModalDiv>
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
            <CancleButton
              type="button"
              onClick={() => {
                navigate(`/order/menu?cafeId=${order.cafeId}`);
                setShowPopup(false);
              }}
            >
              취소
            </CancleButton>
            <PrimaryButton type="button" onClick={() => handleClickButton()}>
              담기
            </PrimaryButton>
          </div>
        </div>
      </div>
    </BucketModalDiv>
  );
};

export default BucketModal;
