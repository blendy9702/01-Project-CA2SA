import axios from "axios";
import moment from "moment/moment";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import NavBar from "../../components/order/NavBar";
import OrderProgress from "../../components/order/OrderProgress";
import { ContainerDiv, LayoutDiv } from "../../styles/order/orderpage";
import DockBar from "../../components/DockBar";
import CancleModal from "../../components/order/CanCleModal";
// progress
const progressArr = [0, 1, 2, 3];

function Confirmation() {
  // useSearchParams
  const [searchParams, setSearchParams] = useSearchParams();
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  const userId = userData.resultData.userId;
  // const userId = searchParams.get("userId");
  // useNavigation
  const navigate = useNavigate();
  const location = useLocation();
  const locationData = location.state;

  const handleNavigateClose = () => {
    navigate("/");
  };
  const handleNavigateOrderDetails = () => {
    navigate(`/orders/detail?userId=${userId}&orderId=${orderId}`);
  };
  // axios 불러오기
  useEffect(() => {
    const getOrder = async () => {
      try {
        const res = await axios.get(
          `/api/order?signed_user_id=${userId}&page=1&size=30`,
        );
        console.log("주문 확인 결과:", res.data);
        const resultData = res.data.resultData;
        const nowOrder = resultData[0];
        setOrderedList(resultData);
        setResentOrder(nowOrder);
        setNowProgress(nowOrder.orderProgress);
      } catch (error) {
        console.log(error);
      }
    };
    getOrder(userId);
  }, []);

  // useState
  const [OrderedList, setOrderedList] = useState([]);
  const [recentOrder, setResentOrder] = useState({});
  const [nowProgress, setNowProgress] = useState(0);
  const [showCancleModal, setShowCancleModal] = useState(false);

  const orderMenuList = recentOrder.orderMenuList || [];
  const orderId = recentOrder.orderId;
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
  useEffect(() => {
    console.log("현재 진행도", nowProgress);
  }, [nowProgress]);

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
          <h4 style={{ color: "var(--primary-color)" }}>
            {recentOrder ? recentOrder.cafeName : "정보가 없습니다."}
          </h4>
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
            <p style={{ fontSize: 12 }}>
              가게 사정에 따라 메뉴 완성 시간이 다를 수 있습니다.
            </p>
          </div>
        </ContainerDiv>
      </LayoutDiv>
      {/* 주문 정보 */}
      <LayoutDiv>
        <ContainerDiv>
          <h3>주문 정보</h3>
          {/* 주문 리스트 */}
          <div className="orderdInfoBox">
            {recentOrder && recentOrder.orderMenuList
              ? recentOrder.orderMenuList.map((item, index) => {
                  return (
                    <div className="infoDetail" key={index}>
                      <div className="menuInfo">
                        <p className="title">{item.orderMenuName}</p>
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
                })
              : "정보를 불러오는 중입니다."}
          </div>
          {/* 주문 일시 */}
          <div className="orderdInfoBox">
            <div className="infoDetail">
              <p className="title">주문 일시</p>
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
              <p className="title">요청 사항</p>
              <p className="light">{recentOrder.memo}</p>
            </div>
          </div>
          <div className="toLink">
            <button type="button" onClick={() => handleNavigateOrderDetails()}>
              주문 상세내역 보기{" "}
              <i>
                <IoIosArrowForward />
              </i>
            </button>
          </div>
          <div className="toLink">
            <button type="button" onClick={() => setShowCancleModal(true)}>
              주문 취소하기{" "}
              <i>
                <IoIosArrowForward />
              </i>
            </button>
          </div>
          {showCancleModal ? (
            <CancleModal
              showCancleModal={showCancleModal}
              setShowCancleModal={setShowCancleModal}
              orderId={orderId}
            />
          ) : null}
        </ContainerDiv>
      </LayoutDiv>
      <DockBar />
    </div>
  );
}

export default Confirmation;
