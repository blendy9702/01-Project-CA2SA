import moment from "moment";
import {
  ContainerDiv,
  LayoutDiv,
  OrderDetailDiv,
} from "../../styles/order/orderpage";
import NavBar from "./NavBar";

const OrderDetail = ({ setShowOrderDetail, recentOrder }) => {
  const handleClose = () => {
    setShowOrderDetail(false);
  };

  const time1 = moment(recentOrder.createdAt);
  const time2 = moment(recentOrder.pickUpTime);

  const diffInMinutes = time2.diff(time1, "minutes");
  const orderMenuList = recentOrder.orderMenuList;
  const totalPrice = (orderMenuList || []).reduce((acc, curr) => {
    const menuDefualtPrice = curr.price;
    const menuAddPrice = curr.options.reduce(
      (_acc, _curr) => _acc + _curr.addPrice,
      0,
    );
    return acc + menuDefualtPrice + menuAddPrice;
  }, 0);

  return (
    <OrderDetailDiv>
      <NavBar icon={"close"} onClick={handleClose} />
      <LayoutDiv borderBottom={5} style={{ margin: "0 20px" }}>
        {/* 유저 정보 */}
        <ContainerDiv borderBottom={true}>
          <h2 style={{ color: "var(--primary-color)" }}>
            {recentOrder.cafeName}
          </h2>
          <h2>주문 상세 내역</h2>

          <div className="info">
            <div className="info-detail">
              <p className="info-title">닉네임 :</p>
              <p>{recentOrder.nickName}</p>
            </div>
            <div className="info-detail">
              <p className="info-title">결제일시 :</p>
              <p>{moment(recentOrder.createdAt).format("YYYY.MM.DD.HH:mm")}</p>
            </div>
          </div>
        </ContainerDiv>

        {/* 메뉴 상세 정보 */}
        <ContainerDiv borderBottom={true}>
          <div className="menuDetail">
            {recentOrder && recentOrder.orderMenuList
              ? recentOrder.orderMenuList.map((item, index) => {
                  console.log(item);
                  return (
                    <div key={index}>
                      <h4>{item.orderMenuName}</h4>
                      <div className="info">
                        <div className="left">
                          <ul>
                            {item.options.map((_item, _index) => {
                              return (
                                <li key={_index}>
                                  {_item.optionName} (
                                  {_item.addPrice.toLocaleString()}
                                  원)
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                        <p className="right">
                          {(
                            item.price +
                            item.options.reduce((acc, curr) => {
                              return acc + curr.addPrice;
                            }, 0)
                          ).toLocaleString()}{" "}
                          원
                        </p>
                      </div>
                    </div>
                  );
                })
              : "정보를 불러오고 있습니다."}
            <p>
              {diffInMinutes < 60
                ? `${diffInMinutes}분 뒤에 받으러 갈게요`
                : `1시간 이상 뒤에 받으러 갈게요`}
            </p>
          </div>
        </ContainerDiv>
        {/* 총 결제 금액 */}
        <ContainerDiv>
          <div className="total-price">
            <h3>총 결제금액</h3>
            <p>{totalPrice.toLocaleString()} 원</p>
          </div>
        </ContainerDiv>
      </LayoutDiv>
    </OrderDetailDiv>
  );
};
export default OrderDetail;
