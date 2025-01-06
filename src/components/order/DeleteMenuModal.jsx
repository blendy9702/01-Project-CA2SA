import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { OrderContext } from "../../contexts/OrderContext";
import { ModalButton, ModalDiv } from "../../styles/order/BucketModal";
import { PrimaryButton } from "../../styles/common";

const DeleteMenuModal = ({ item, index, showModal, setShowModal }) => {
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  const userId = userData.resultData.userId;
  const { setOrder, order } = useContext(OrderContext);
  const navigate = useNavigate();
  const handleClickDeleteButton = () => {
    setOrder(prevOrder => {
      const updatedMenu = [...prevOrder.menuList];
      if (updatedMenu[index].count > 1) {
        updatedMenu[index].count -= 1; // 수량 감소
      } else {
        setShowModal(false);
        updatedMenu.splice(index, 1);
      }
      return { ...prevOrder, menuList: updatedMenu };
    });
  };
  return (
    <ModalDiv>
      <div className="inner">
        <div className="container">
          <div className="content">
            <p className="main">장바구니 메뉴를 삭제하시겠습니까?</p>
            <p className="sub">선택하신 메뉴를 장바구니에서 삭제합니다.</p>
          </div>
          <div className="button-box">
            <ModalButton
              type="button"
              onClick={() => {
                navigate(`/order/payment?cafeId=${order.cafeId}`);
                setShowModal(false);
              }}
            >
              취소
            </ModalButton>
            <PrimaryButton
              type="button"
              onClick={() => handleClickDeleteButton()}
            >
              확인
            </PrimaryButton>
          </div>
        </div>
      </div>
    </ModalDiv>
  );
};

export default DeleteMenuModal;
