import axios from "axios";
import moment from "moment/moment";
import { useContext, useEffect, useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import NavBar from "../../components/order/NavBar";
import { OrderContext } from "../../contexts/OrderContext";
import {
  ContentDiv,
  LayoutDiv,
  OrderButton,
  ThumImageDiv,
} from "../../styles/order/orderpage";

const OrderPage = () => {
  //useSearchPrams
  const [searchParams, setSearchParams] = useSearchParams();
  const cafe_id = searchParams.get("cafe_id");
  // useRef
  const imgRef = useRef(null);
  const imgtag = imgRef.current;
  const imgURL = imgtag?.getAttribute("src");
  useEffect(() => {
    // console.log("이미지 주소:", imgURL);
  }, [imgURL]);

  // useNavigation
  const location = useLocation();
  const locationData = location.state;
  const cafeId = locationData[0].cafeId;
  useEffect(() => {
    // console.log("카페 페이지 location:", locationData);
  }, [locationData]);
  const navigate = useNavigate();
  const handleNavigateMain = () => {
    navigate("/");
  };
  const handleNavigateList = () => {
    // useNavigate
    navigate(`/order/menu?cafeId=${cafeId}`, {
      state: [{ cafeId: cafeId }, cafeInfo, { prev: "/order" }],
    });
  };
  // context
  const { order, setOrder } = useContext(OrderContext);

  // useState
  const [cafeInfo, setCafeInfo] = useState({});
  // 카페 정보 조회
  useEffect(() => {
    const getCafe = async data => {
      try {
        const res = await axios.get(`/api/cafe?cafe_id=${data}`);
        const resultData = res.data.resultData;
        setCafeInfo(resultData);
        console.log("카페정보 통신 결과:", cafeInfo);
      } catch (error) {
        console.log("카페정보 통신 결과:", error);
        // console.log("mockData가 적용됩니다.");
        // setCafeInfo(mockDataResult);
      }
    };
    if (cafeId) {
      getCafe(cafeId);
    }
  }, []);

  return (
    <div style={{ position: "relative", paddingBottom: 30, width: "100%" }}>
      <NavBar
        onClick={handleNavigateMain}
        icon={"close"}
        title={cafeInfo?.cafeName || "로딩중"}
      />
      <ThumImageDiv height={300}>
        <img
          src={
            cafeInfo
              ? `http://112.222.157.156:5214/pic/cafe/${cafeId}/${cafeInfo?.cafePic}`
              : "/images/order/cat.jpg"
          }
          ref={imgRef}
        ></img>
      </ThumImageDiv>
      <LayoutDiv>
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
        <OrderButton
          type="button"
          onClick={handleNavigateList}
          className="go-menulist"
        >
          메뉴담기
        </OrderButton>
      </LayoutDiv>
    </div>
  );
};

export default OrderPage;
