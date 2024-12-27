import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  ContentDiv,
  OrderPageDiv,
  ThumImageDiv,
} from "../../styles/order/orderpage";
import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../../contexts/OrderContext";
import { getCafeInfo, resPostLoginData } from "../../apis/order";
import NavBar from "../../components/order/NavBar";
import { getCafe } from "../../apis/orderapi";
import moment from "moment/moment";
import axios from "axios";

const OrderPage = () => {
  // 임시 카페 아이디 설정
  const cafeId = 3;
  //useSearchPrams
  const [searchParams, setSearchParams] = useSearchParams();
  const cafeName = searchParams.get("cafeName");
  console.log(cafeName);
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
  // order가 제대로 바뀌고 있는지 확인
  useEffect(() => {}, [order]);

  // useState
  const [cafeInfo, setCafeInfo] = useState({});

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
              ? `cafe/${cafeId}/${cafeInfo?.cafePic}`
              : "/images/order/cat.jpg"
          }
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
