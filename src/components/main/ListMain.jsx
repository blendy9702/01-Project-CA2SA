import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import ListBox from "./ListBox";

import { Pagination } from "swiper/modules";
import SlideItem from "./SlideItem";

const ListitemBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TitleFlex = styled.a`
  display: flex;
  align-items: center;

  h2 {
    margin-right: auto;
  }
  span {
    color: var(--color-gray-500);
    svg {
      font-size: 12px;
      margin-left: 3px;
    }
  }
`;

export const BannerWrap = styled.a`
  display: inline-block;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 16px;
  }
`;

const ListMain = () => {
  const [cafeData, setCafeData] = useState([]); // API 데이터를 저장할 state
  const [state, setState] = useState({
    center: {
      lat: 35.868408,
      lng: 128.594054,
    },
    errMsg: null,
    isLoading: true,
  });

  const slideData = [
    "images/main_visual_image-2.png",
    "images/main_visual_image-1.png",
    "images/main_visual_image-3.png",
    "images/main_visual_image-4.png",
    "images/main_visual_image-5.png",
    "images/main_visual_image-6.png",
    "images/main_visual_image-7.png",
  ];

  const cafeInfo = async () => {
    try {
      const res = await axios.get(
        `api/user?userLatitude=${state.center.lat}&userLongitude=${state.center.lng}`,
      );
      console.log("Response Data:", res.data);
      setCafeData(res.data.resultData);
      console.log(setCafeData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    cafeInfo();
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(
        position => {
          setState(prev => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }));
        },
        err => {
          setState(prev => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        },
      );
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      setState(prev => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없어요..",
        isLoading: false,
      }));
    }
  }, []);
  return (
    <div style={{ width: "100%" }}>
      <Swiper className="mySwiper" style={{ margin: "30px 0" }}>
        {slideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <SlideItem image={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div>
        <TitleFlex to="#">
          <h2>요즘은 #아샷추 가 대세</h2>
        </TitleFlex>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {cafeData.map(cafe => (
            <SwiperSlide key={cafe.id}>
              <ListBox cafe={cafe} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <TitleFlex to="#">
          <h2>나와 가까운 매장</h2>
        </TitleFlex>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {cafeData.map(cafe => (
            <SwiperSlide key={cafe.id}>
              <ListBox cafe={cafe} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <BannerWrap to="#">
        <img src="images/qna_banner.png" alt="QNABanner" />
      </BannerWrap>
      <BannerWrap to="#" style={{ "margin-top": "30px" }}>
        <img src="images/Frame 307.png" alt="eventBanner" />
      </BannerWrap>
      <footer>
        <h1>logo</h1>
        <ul>
          <li>
            <Link to="#">이용약관</Link>
          </li>
          <li>
            <Link to="#">개인정보 처리 방침</Link>
          </li>
          <li>
            <Link to="#">사업자 정보 확인</Link>
          </li>
          <li>
            <Link to="#">개인정보 제 3자 제공동의</Link>
          </li>
        </ul>
        <p>
          카투사는 통신판매 중개자이며, 통신판매 당사자가 아닙니다. 따라서
          패스오더는 상품 거래 정보 및 거래에 대한 책임을 지지않습니다.
        </p>
      </footer>
    </div>
  );
};

export default ListMain;
