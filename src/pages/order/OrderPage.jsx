import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import {
  ContentDiv,
  OrderPageDiv,
  ThumImageDiv,
} from "../../styles/order/orderpage";
import { useContext, useEffect } from "react";
import { OrderContext } from "../../contexts/OrderContext";
import { getCafeInfo, resPostLoginData } from "../../apis/order";
import NavBar from "../../components/order/NavBar";
import { getCafe } from "../../apis/orderapi";

//주소 분활
const splitLocation = getCafeInfo.resultData.location.split("(우)");
const address = splitLocation[0];
const postcode = splitLocation[1];

const OrderPage = () => {
  const { order, setOrder } = useContext(OrderContext);
  // order가 제대로 바뀌고 있는지 확인
  useEffect(() => {}, [order]);
  // order에 cafeId, userId값 채워넣기
  useEffect(() => {
    const updatedOrder = {
      ...order,
      cafeId: getCafeInfo.resultData.cafeId,
      userId: resPostLoginData.resultData.userId,
    };
    setOrder(updatedOrder);
    console.log(order);
  }, []);
  // 카페 정보 조회
  useEffect(() => {
    getCafe(3);
  }, []);

  // useNavigation
  const navigate = useNavigate();
  const addOrderInfo = () => {
    const orderData = {
      ...resPostLoginData.resultData,
      ...getCafeInfo.resultData,
    };
    navigate("menu", {
      state: orderData,
    });
  };

  return (
    <OrderPageDiv>
      <NavBar
        path={"/"}
        title={getCafeInfo.resultData.cafeName}
        scrollevent={true}
        style={{ position: "fixed", top: 0, left: 0 }}
      />
      <ThumImageDiv>
        <img src="#"></img>
      </ThumImageDiv>
      <ContentDiv>
        <div className="title-box">
          <h2>{getCafeInfo.resultData.cafeName}</h2>
        </div>
        <div className="cafe-info">
          <h3>매장정보</h3>
          <div className="info-box">
            <p className="info-subtitle">영업시간</p>
            <div className="info-detail">
              <p>
                매일 {getCafeInfo.resultData.openTime}-
                {getCafeInfo.resultData.closeTime}
              </p>
              <p>라스트 오더{getCafeInfo.resultData.closeTime}</p>
            </div>
          </div>
          <div className="info-box">
            <p className="info-subtitle">전화번호</p>
            <div className="info-detail">
              <p className="tel">{getCafeInfo.resultData.tel}</p>
            </div>
          </div>
          <div className="info-box last">
            <p className="info-subtitle">주소</p>
            <div className="info-detail">
              <p>{address}</p>
              <p>(우){postcode}</p>
            </div>
          </div>
          <div className="map"></div>
          <div className="business-number">
            <p>사업자 정보 조회</p>
            <IoIosArrowForward className="icon" />
          </div>
        </div>
      </ContentDiv>
      <button
        type="button"
        onClick={() => addOrderInfo()}
        style={{ bottom: "80px" }}
        className="go-menulist"
      >
        메뉴담기
      </button>
    </OrderPageDiv>
  );
};

export default OrderPage;
