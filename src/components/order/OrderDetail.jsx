import moment from "moment";
import { ContainerDiv, LayoutDiv } from "../../styles/order/orderpage";
import NavBar from "./NavBar";
import OrderProgress from "./OrderProgress";

const OrderDetail = ({ showOrderDetail, setShowOrderDetail, recentOrder }) => {
  const handleClose = () => {
    setShowOrderDetail(false);
  };
  return (
    <div>
      <NavBar icon={"close"} onClick={handleClose} />
      <LayoutDiv borderBottom={5} style={{ margin: "0 20px" }}>
        {/* 유저 정보 */}
        <ContainerDiv>
          <h4 style={{ color: "var(--primary-color)" }}>
            {recentOrder.cafeName}
          </h4>
          <h2>주문 상세 내역</h2>
          <div className="order-Info">
            <div className="info">
              <p>닉네임</p>
              <p>{recentOrder.nickName}</p>
            </div>
            {/* <div className="info">
              <p>결제 정보</p>
              <p>{recentOrder.nickName}</p>
            </div>
            <div className="info">
              <p>연락처</p>
              <p>{recentOrder.nickName}</p>
            </div> */}
            <div className="info">
              <p>결제일시</p>
              <p>{moment(recentOrder.createdAt).format("YYYY.MM.DD.HH:mm")}</p>
            </div>
          </div>
        </ContainerDiv>
        {/* 메뉴 상세 정보 */}
      </LayoutDiv>
    </div>
  );
};
export default OrderDetail;
