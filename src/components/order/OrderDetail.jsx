import moment from "moment";
import { ContainerDiv, LayoutDiv } from "../../styles/order/orderpage";
import NavBar from "./NavBar";

const OrderDetail = ({ showOrderDetail, setShowOrderDetail, recentOrder }) => {
  const handleClose = () => {
    setShowOrderDetail(false);
  };

  const time1 = moment(recentOrder.createdAt);
  const time2 = moment(recentOrder.pickUpTime);

  const diffInMinutes = time2.diff(time1, "minutes");

  return (
    <div>
      <NavBar icon={"close"} onClick={handleClose} />
      <LayoutDiv borderBottom={5} style={{ margin: "0 20px" }}>
        {/* 유저 정보 */}
        <ContainerDiv borderBottom={true}>
          <h4 style={{ color: "var(--primary-color)" }}>
            {recentOrder.cafeName}
          </h4>
          <h2>주문 상세 내역</h2>

          <div className="info">
            <p>닉네임</p>
            <p>{recentOrder.nickName}</p>
          </div>
        </ContainerDiv>
        {/* 결제 일시 */}
        <ContainerDiv borderBottom={true}>
          <p>결제일시</p>
          <p>{moment(recentOrder.createdAt).format("YYYY.MM.DD.HH:mm")}</p>
        </ContainerDiv>
        {/* 메뉴 상세 정보 */}
        <ContainerDiv borderBottom={true}>
          <div className="menuDetail">
            {recentOrder.orderMenuList.map((item, index) => {
              return (
                <div key={index}>
                  <h4>{item.orderMenuName}</h4>
                  <ul>
                    {item.options.map((_item, _index) => {
                      console.log("옵션이름:", _item.optionName);
                      return <li key={_index}>{_item.optionName}</li>;
                    })}
                  </ul>
                  <h3>
                    {(
                      item.price +
                      item.options.reduce((acc, curr) => {
                        return acc + curr.addPrice;
                      }, 0)
                    ).toLocaleString()}{" "}
                    원
                  </h3>
                </div>
              );
            })}
            <p>
              {diffInMinutes < 60
                ? `${diffInMinutes}분 뒤에 받으러 갈게요`
                : `1시간 이상 뒤에 받으러 갈게요`}
            </p>
          </div>
        </ContainerDiv>
      </LayoutDiv>
    </div>
  );
};
export default OrderDetail;
