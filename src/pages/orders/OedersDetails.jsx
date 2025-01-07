import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  ContainerDiv,
  LayoutDiv,
  OrderDetailDiv,
} from "../../styles/order/orderpage";
import NavBar from "../../components/order/NavBar";
import DockBar from "../../components/DockBar";

// userId
// const userData = JSON.parse(sessionStorage.getItem("userData")) || {
//   resultData: { userId: "없음" },
// };
// console.log("유저", userData);
// const userId = userData.resultData.userId;

function OedersDetails() {
  const [searchParams, setSearchParams] = useSearchParams();
  const orderId = parseInt(searchParams.get("orderId"));
  // const userId = searchParams.get("userId");
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  const userId = userData.resultData.userId;
  // useNavigate
  const navigate = useNavigate();
  const handleClose = () => {
    navigate(-1);
  };
  // useState
  const [selectedOrder, setSelectedOrder] = useState({});
  // axios
  useEffect(() => {
    const getOrder = async () => {
      try {
        console.log("보내기 직전 유저", userId);
        const res = await axios.get(
          `/api/order?signed_user_id=${userId}&page=1&size=30`,
        );
        console.log("주문 확인 결과:", res.data);
        const resultData = res.data.resultData;
        const nowOrder = resultData.filter(item => {
          return item.orderId === orderId;
        });
        setSelectedOrder(nowOrder[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getOrder(userId);
  }, []);
  useEffect(() => {
    console.log("현재 주문:", selectedOrder);
  }, [selectedOrder]);
  // 시간 계산
  const time1 = moment(selectedOrder.createdAt, "YYYY-MM-DD HH:mm:ss");
  const time2 = moment(
    `${time1.format("YYYY-MM-DD")}${selectedOrder.pickUpTime}`,
    "YYYY-MM-DD HH:mm:ss",
  );

  const diffInMinutes = time2.diff(time1, "minutes");
  console.log("시간 계산:", {
    time1: time1,
    time2: time2,
    diffInMinutes: diffInMinutes,
  });
  const showPickUpTime = diffInMinutes => {
    if (diffInMinutes <= 0) {
      return "지금 받으러 갈게요";
    } else if (diffInMinutes > 0 && diffInMinutes <= 5) {
      return "5분 뒤에 받으러 갈게요";
    } else if (diffInMinutes > 5 && diffInMinutes <= 10) {
      return "10분 뒤에 받으러 갈게요";
    } else if (diffInMinutes > 10 && diffInMinutes <= 15) {
      return "15분 뒤에 받으러 갈게요";
    } else if (diffInMinutes > 15 && diffInMinutes <= 20) {
      return "20분 뒤에 받으러 갈게요";
    } else if (diffInMinutes > 20 && diffInMinutes <= 30) {
      return "30분 뒤에 받으러 갈게요";
    } else if (diffInMinutes > 30 && diffInMinutes <= 40) {
      return "40분 뒤에 받으러 갈게요";
    } else {
      return "1시간 이상 뒤에 받으러 갈게요";
    }
  };
  const orderMenuList = selectedOrder.orderMenuList;
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
      <NavBar icon={"close"} onClick={handleClose} title={"상세보기"} />
      <LayoutDiv style={{ margin: "0 20px" }}>
        {/* 유저 정보 */}
        <ContainerDiv borderBottom={true} style={{ padding: "20px 0" }}>
          <h2 style={{ color: "var(--primary-color)" }}>
            {selectedOrder
              ? selectedOrder.cafeName
              : "정보를 불러오는 중입니다.."}
          </h2>
          <h2>주문 상세 내역</h2>

          <div className="info" style={{ marginTop: 20 }}>
            <div className="info-detail">
              <p className="info-title">닉네임 :</p>
              <p>{selectedOrder.nickName}</p>
            </div>
            <div className="info-detail">
              <p className="info-title">결제일시 :</p>
              <p>
                {moment(selectedOrder.createdAt).format("YYYY.MM.DD.HH:mm")}
              </p>
            </div>
          </div>
        </ContainerDiv>

        {/* 메뉴 상세 정보 */}
        <ContainerDiv borderBottom={true} style={{ padding: "20px 0" }}>
          <div className="menuDetail">
            {selectedOrder && selectedOrder.orderMenuList
              ? selectedOrder.orderMenuList.map((item, index) => {
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
            <p
              style={{
                color: "var(--color-gray-500)",
              }}
            >
              {showPickUpTime(diffInMinutes)}
            </p>
          </div>
        </ContainerDiv>
        {/* 총 결제 금액 */}
        <ContainerDiv borderBottom={true} style={{ padding: "20px 0" }}>
          <div className="total-price">
            <h3>총 결제금액</h3>
            <p>{totalPrice.toLocaleString()} 원</p>
          </div>
        </ContainerDiv>
        <ContainerDiv style={{ padding: "10px 0" }}>
          <p style={{ fontSize: "14px", color: "var(--color-gray-500)" }}>
            결제 취소 관련 문의는 해당 매장에 연락해 주시기 바랍니다.
          </p>
        </ContainerDiv>
      </LayoutDiv>
      <DockBar />
    </OrderDetailDiv>
  );
}

export default OedersDetails;
