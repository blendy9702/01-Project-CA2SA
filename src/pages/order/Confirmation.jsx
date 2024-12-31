import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import NavBar from "../../components/order/NavBar";
import { ContainerDiv, LayoutDiv } from "../../styles/order/orderpage";
import { useEffect, useState } from "react";
import axios from "axios";
import OrderProgress from "../../components/order/OrderProgress";
import moment from "moment/moment";
import OrderDetail from "../../components/order/OrderDetail";

const mockData = {
  resultMessage: "string",
  resultData: [
    {
      orderId: 0,
      nickName: "고사리 빵펀치",
      cafeName: "스타벅스",
      location: "어쩌구 저쩌구 위치",
      pickUpTime: "2024-12-20 03:10:00",
      createdAt: "2024-12-20 02:00:00",
      memo: "얼음 꽊",
      orderProgress: 2,
      orderMenuList: [
        {
          orderMenuId: 0,
          orderMenuName: "아메리카노",
          price: 1500,
          count: 1,
          options: [
            {
              menuOptionId: 0,
              optionName: "HOT",
              addPrice: 0,
            },
            {
              menuOptionId: 0,
              optionName: "샷 추가",
              addPrice: 500,
            },
          ],
        },
        {
          orderMenuId: 0,
          orderMenuName: "카페라떼",
          price: 3500,
          count: 1,
          options: [
            {
              menuOptionId: 0,
              optionName: "HOT",
              addPrice: 0,
            },
            {
              menuOptionId: 0,
              optionName: "샷 추가",
              addPrice: 500,
            },
          ],
        },
      ],
    },
  ],
};
const mockDataResultData = mockData.resultData;

// progress
const progressArr = [1, 2, 3, 4];

function Confirmation() {
  // useSearchParams
  const [searchParams, setSearchParams] = useSearchParams();
  // useNavigation
  const navigate = useNavigate();
  const location = useLocation();
  const locationData = location.state;
  // const cafeId = locationData[0];
  // const cafeInfo = locationData[1];
  // const fromPage = locationData[2];
  const handleNavigateClose = () => {
    navigate("/");
  };

  const mockNow = mockDataResultData[0]; //최근 주문
  // useState
  const [nowProgress, setNowProgress] = useState(0);
  const [recentOrder, setResentOrder] = useState(mockNow);
  const [showOrderDetail, setShowOrderDetail] = useState(false);

  // userId
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  // const userId = userData.resultData.userId;
  const userId = 39;

  // mocKData 적용
  useEffect(() => {
    setNowProgress(recentOrder.orderProgress);
    console.log("현재 주문 상태:", nowProgress);
  }, [nowProgress]);
  // axios
  useEffect(() => {
    const getOrder = async data => {
      try {
        const res = await axios.get(
          `/api/order?signed_user_id=${userId}&page=1&size=30`,
        );
        console.log("res.data", res.data);
        const resultData = res.data.resultData;
        setResentOrder(resultData[0]);
      } catch (error) {
        console.log(error);
      }
    };
    // getOrder(userId);
  }, []);

  return (
    <div style={{ position: "relative", paddingBottom: 30, width: "100%" }}>
      <NavBar
        onClick={handleNavigateClose}
        icon={"close"}
        title={"결제 완료"}
      />
      {/* 주문 과정 */}
      <LayoutDiv borderBottom={5} style={{ margin: "0 20px" }}>
        <ContainerDiv>
          <h4 style={{ color: "var(--primary-color)" }}>컴포즈 동성로점</h4>
          <h2>주문을 확인하고 있습니다.</h2>
          <div className="porogress-box">
            <div className="inProgress">
              {progressArr.map((item, index) => {
                return (
                  <OrderProgress
                    progress={item}
                    key={index}
                    selectedProgress={nowProgress === index ? true : false}
                  />
                );
              })}
            </div>
            <p>가게 사정에 따라 메뉴 완성 시간이 다를 수 있습니다.</p>
          </div>
        </ContainerDiv>
      </LayoutDiv>
      {/* 주문 정보 */}
      <LayoutDiv>
        <ContainerDiv>
          <h3>주문 정보</h3>
          {/* 주문 리스트 */}
          <div className="orderdInfoBox">
            {recentOrder.orderMenuList.map((item, index) => {
              return (
                <div className="infoDetail" key={index}>
                  <div className="menuInfo">
                    <p>{item.orderMenuName}</p>
                    <ul>
                      {item.options.map((_item, _index) => {
                        return <li key={_index}>{_item.optionName}</li>;
                      })}
                    </ul>
                  </div>
                  <h5 className="price">
                    {(
                      item.price +
                      item.options.reduce((acc, curr) => {
                        return acc + curr.addPrice;
                      }, 0)
                    ).toLocaleString()}{" "}
                    원
                  </h5>
                </div>
              );
            })}
          </div>
          {/* 주문 일시 */}
          <div className="orderdInfoBox">
            <div className="infoDetail">
              <p>주문 일시</p>
              <p className="light">
                {moment(recentOrder.createdAt).format(
                  "YYYY년MM월DD일 HH:mm:ss",
                )}
              </p>
            </div>
          </div>
          {/* 요청 사항 */}
          <div className="orderdInfoBox">
            <div className="infoDetail">
              <p>요청 사항</p>
              <p className="light">{recentOrder.memo}</p>
            </div>
          </div>
          <div className="toLink">
            <button
              type="button"
              onClick={() => {
                setShowOrderDetail(!showOrderDetail);
              }}
            >
              주문 상세내역 보기
            </button>
            <OrderDetail
              showOrderDetail={showOrderDetail}
              setShowOrderDetail={setShowOrderDetail}
              recentOrder={recentOrder}
            />
          </div>
        </ContainerDiv>
      </LayoutDiv>
    </div>
  );
}

export default Confirmation;
