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
import CafeMap from "../../components/order/CafeMap";

const OrderPage = () => {
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  const userId = userData.resultData.userId;
  // useState
  const [cafeInfo, setCafeInfo] = useState({});

  //useSearchPrams
  const [searchParams, setSearchParams] = useSearchParams();
  const cafeId = searchParams.get("cafeId");
  // useRef
  const imgRef = useRef(null);
  useEffect(() => {
    // console.log(imgRef.current);
  }, [imgRef]);

  // useNavigation
  const location = useLocation();
  const locationData = location.state;

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
      state: { ...cafeInfo, cafeId: cafeId },
    });
  };
  // context
  const { order, setOrder } = useContext(OrderContext);

  // 카페 정보 조회
  useEffect(() => {
    const getCafe = async data => {
      try {
        const res = await axios.get(`/api/cafe/${data}`);
        const resultData = res.data.resultData;
        setCafeInfo(resultData);
      } catch (error) {
        console.log("카페정보 통신 결과:", error);
        // console.log("mockData가 적용됩니다.");
        // setCafeInfo(mockDataResult);
      }
    };
    getCafe(cafeId);
  }, []);

  useEffect(() => {
    // console.log("카페정보 통신 결과(cafeInfo):", cafeInfo);
  }, [cafeInfo]);

  return (
    <div style={{ position: "relative", paddingBottom: 30, width: "100%" }}>
      <NavBar
        onClick={handleNavigateMain}
        icon={"close"}
        title={cafeInfo?.cafeName || "🐈"}
      />
      <ThumImageDiv height={300}>
        <img src={cafeInfo ? cafeInfo?.cafePic : ""} ref={imgRef}></img>
      </ThumImageDiv>
      <LayoutDiv>
        <ContentDiv>
          <div className="title-box">
            <h2>{cafeInfo?.cafeName || "🐈"}</h2>
          </div>
          <div className="cafe-info">
            <h3>매장정보</h3>
            <div className="info-box">
              <p className="info-subtitle">영업시간</p>
              <div className="info-detail">
                <p>
                  매일{" "}
                  {moment(cafeInfo?.openTime || "🐈", "HH:mm:ss").format(
                    "HH:mm",
                  )}
                  -
                  {moment(cafeInfo?.closeTime || "🐈", "HH:mm:ss").format(
                    "HH:mm",
                  )}
                </p>
                <p>
                  라스트 오더{" "}
                  {moment(cafeInfo?.closeTime || "🐈", "HH:mm:ss").format(
                    "HH:mm",
                  )}
                </p>
              </div>
            </div>
            <div className="info-box">
              <p className="info-subtitle">전화번호</p>
              <div className="info-detail">
                <p className="tel">{cafeInfo?.tel || "🐈"}</p>
              </div>
            </div>
            <div className="info-box last">
              <p className="info-subtitle">주소</p>
              <div className="info-detail">
                <p>{cafeInfo?.location || "🐈"}</p>
              </div>
            </div>
            <div className="map">
              <CafeMap cafeInfo={cafeInfo} />
            </div>
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
