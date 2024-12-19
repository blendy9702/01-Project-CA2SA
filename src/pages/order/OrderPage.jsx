import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import {
  ContentDiv,
  OrderPageDiv,
  ThumImageDiv,
} from "../../styles/order/orderpage";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "@emotion/react";

// 임시 데이터
// 카페 정보 불러온 결과
const getCafeInfo = {
  resultMessage: "1",
  resultData: {
    cafeName: "컴포즈 동성로점",
    location: "대구 중구 달구벌대로 2123 1층 (우)41943",
    tel: "0532596648",
    cafePic: "String",
    openTime: "09:00",
    closeTime: "22:00",
  },
};
//주소 분활
const splitLocation = getCafeInfo.resultData.location.split("(우)");
const address = splitLocation[0];
const postcode = splitLocation[1];

//주문 보낼 때 채울 데이터 형식
const postDataForm = {
  cafeId: "long",
  userId: "long",
  pickUpTime: "String",
  menuId: "long",
  count: "int",
  menuOptionId: "long",
};
//주문 보냈을 때 올 데이터
const resultPostData = { resultMessage: "주문 성공", resultData: 1 };
// 주문 했던 정보 가져오기
const getOderInfo = {
  resultMessage: "1",
  resultData: {
    location: "String",
    cafeName: "String",
    orderId: "long",
    pickUpTime: "String",
    count: "int",
    menuOptionName: "String",
    createdAt: "time",
  },
};

const OrderPage = () => {
  const navigate = useNavigate();
  const { setTheme } = useContext(ThemeContext);

  return (
    <OrderPageDiv>
      <Link
        to="/"
        onClick={() => {
          setTheme(true);
        }}
      >
        <IoIosArrowBack />
      </Link>
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
        onClick={() => {
          navigate("menulist");
        }}
      >
        메뉴담기
      </button>
    </OrderPageDiv>
  );
};

export default OrderPage;
