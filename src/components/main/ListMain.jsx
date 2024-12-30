import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from "swiper/react";
import ListBox from "./ListBox";

import { Pagination } from "swiper/modules";
import SlideItem from "./SlideItem";

const ListitemBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TitleFlex = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0 20px 0;
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

export const BannerWrap = styled(Link)`
  display: inline-block;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 16px;
  }
`;
export const FooterStyle = styled.footer`
  background-color: var(--color-white);
  padding: 30px 20px 100px 20px;
  ul {
    display: flex;
    gap: 10px;
    margin: 15px 0;
    li {
      color: var(--color-gray-300);
    }
  }
  p {
    font-size: 14px;
    color: var(--color-gray-500);
  }
`;
const Agree = styled(Link)`
  font-size: 16px;
  color: var(--color-gray-500);
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
      <Swiper loop={true} className="mySwiper" style={{ marginTop: "30px" }}>
        {slideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <SlideItem image={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div>
        <TitleFlex>
          <h2>
            요즘은 <span>#오곡라떼</span> 가 대세
          </h2>
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
            <SwiperSlide key={cafe.cafeId}>
              <ListBox cafe={cafe} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <TitleFlex>
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
          {cafeData
            .slice() // 원본 배열을 복사하여 정렬 시 원본 배열 변경 방지
            .sort((a, b) => a.distance - b.distance) // distance를 기준으로 오름차순 정렬
            .map(cafe => (
              <SwiperSlide key={cafe.cafeId}>
                <ListBox cafe={cafe} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      <BannerWrap to="/terms/FAQ" style={{ marginTop: "30px" }}>
        <img src="images/qna_banner.png" alt="QNABanner" />
      </BannerWrap>
      <BannerWrap to="/terms/event" style={{ margin: "20px 0 30px 0" }}>
        <img src="images/Frame 307.png" alt="eventBanner" />
      </BannerWrap>
      <FooterStyle>
        <h1 style={{ width: "80px" }}>
          <img
            src="images/footerca2saLogo.png"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </h1>
        <ul>
          <li>
            <Agree to="/terms/service">이용약관</Agree>
          </li>
          <li>|</li>
          <li>
            <Agree to="/terms/privacy">개인정보 처리 방침</Agree>
          </li>
          <li>|</li>
          <li>
            <Agree to="#">사업자 정보 확인</Agree>
          </li>
          <li>|</li>
          <li>
            <Agree to="/terms/marketing">마케팅 정보 수집 및 수신 동의</Agree>
          </li>
        </ul>
        <p>
          카투사는 통신판매중개업자로, 카투사가 거래당사자가 아닙니다. 카투사에
          등록된 점포, 상품, 거래 및 관련 정보에 대하여 해당 판매자가
          거래당사자로서 책임을 부담하며, 카투사는 판매자의 고의 또는 과실로
          소비자에게 발생하는 일체의 손해에 대하여 책임을 부담하지 않습니다.
        </p>
      </FooterStyle>
    </div>
  );
};

export default ListMain;
