import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  ContentDiv,
  OrderPageDiv,
  ThumImageDiv,
} from "../../styles/order/orderpage";
import { useContext, useEffect, useRef, useState } from "react";
import { OrderContext } from "../../contexts/OrderContext";
import { getCafeInfo, resPostLoginData } from "../../apis/order";
import NavBar from "../../components/order/NavBar";
import { getCafe } from "../../apis/orderapi";
import moment from "moment/moment";
import axios from "axios";

// mockData
// const mockData = {
//   resultMessage: "카페 정보 조회 완료",
//   resultData: {
//     cafeName: "로딩중",
//     location: "로딩중",
//     tel: "0534286001",
//     cafePic: "cd55e4f8-7815-4618-9af4-74f11e5288fb.jpg",
//     openTime: "08:59:59",
//     closeTime: "09:00:00",
//   },
// };
// const mockDataResult = mockData.resultData;

const OrderPage = () => {
  //useSearchPrams
  const [searchParams, setSearchParams] = useSearchParams();
  const cafe_id = searchParams.get("cafe_id");
  // useRef
  const imgRef = useRef(null);
  const imgtag = imgRef.current;
  const imaURL = imgtag?.getAttribute("src");
  console.log("이미지 주소:", imaURL);
  // useNavigation
  const navigate = useNavigate();
  const handleNavigateMain = () => {
    navigate("/");
  };
  const handleNavigateList = () => {
    navigate(`/order/menu?cafeId=${cafeId}`, {
      state: [{ cafeId: cafeId }, { ...cafeInfo }, { prev: "/order" }],
    });
  };
  // context
  const { order, setOrder } = useContext(OrderContext);

  // useState
  const [cafeInfo, setCafeInfo] = useState({});

  // 임시 카페 아이디 설정
  const cafeId = 3;
  // 카페 정보 조회
  useEffect(() => {
    const getCafe = async data => {
      try {
        const res = await axios.get(`/api/cafe?cafe_id=${data}`);
        const resultData = res.data.resultData;
        if (resultData) {
          setCafeInfo(resultData);
        }
        console.log("카페정보 조회:", cafeInfo);
      } catch (error) {
        console.log("카페정보 조회:", error);
        // console.log("mockData가 적용됩니다.");
        // setCafeInfo(mockDataResult);
      }
    };
    getCafe(cafeId);
  }, []);

  return (
    <OrderPageDiv>
      <NavBar
        onClick={handleNavigateMain}
        icon={"close"}
        title={cafeInfo?.cafeName || "로딩중"}
        style={{ position: "fixed", top: 0, left: 0 }}
      />
      <ThumImageDiv>
        <img
          src={
            cafeInfo
              ? `http://192.168.0.144:5214/download/ca2sa/image/cafe/${cafeId}/${cafeInfo?.cafePic}`
              : "/images/order/cat.jpg"
          }
          ref={imgRef}
        ></img>
      </ThumImageDiv>
      <ContentDiv>
        <div className="title-box">
          <h2>{cafeInfo?.cafeName || "로딩중"}</h2>
        </div>
        <div className="cafe-info">
          <h3>매장정보</h3>
          <div className="info-box">
            <p className="info-subtitle">영업시간</p>
            <div className="info-detail">
              <p>
                매일{" "}
                {moment(cafeInfo?.openTime || "로딩중", "HH:mm:ss").format(
                  "HH:mm",
                )}
                -
                {moment(cafeInfo?.closeTime || "로딩중", "HH:mm:ss").format(
                  "HH:mm",
                )}
              </p>
              <p>
                라스트 오더{" "}
                {moment(cafeInfo?.closeTime || "로딩중", "HH:mm:ss").format(
                  "HH:mm",
                )}
              </p>
            </div>
          </div>
          <div className="info-box">
            <p className="info-subtitle">전화번호</p>
            <div className="info-detail">
              <p className="tel">{cafeInfo?.tel || "로딩중"}</p>
            </div>
          </div>
          <div className="info-box last">
            <p className="info-subtitle">주소</p>
            <div className="info-detail">
              <p>{cafeInfo?.location || "로딩중"}</p>
              <p>(우)우편번호</p>
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
        onClick={handleNavigateList}
        style={{ bottom: "80px" }}
        className="go-menulist"
      >
        메뉴담기
      </button>
    </OrderPageDiv>
  );
};

export default OrderPage;
