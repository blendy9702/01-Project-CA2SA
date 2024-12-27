import axios from "axios";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ListBox from "./ListBox";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";

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

const BannerWrap = styled.a`
  margin: 30px 0;
  display: inline-block;
`;

const ListMain = () => {
  const [cafeData, setCafeData] = useState([]); // API 데이터를 저장할 state

  const cafeInfo = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/resultData`);
      setCafeData(res.data);
      console.log(setCafeData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    cafeInfo();
  }, []);

  return (
    <div>
      <div>
        <BannerWrap to="#">
          <img src="images/main_visual_image-0.png" alt="mainBanner" />
        </BannerWrap>
        <div>
          <TitleFlex to="#">
            <h2>요즘은 #아샷추 가 대세</h2>
            <span>
              더보기
              <IoIosArrowForward />
            </span>
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
            <span>
              더보기
              <IoIosArrowForward />
            </span>
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

        <Link to="#"></Link>
        <Link to="#"></Link>
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
    </div>
  );
};

export default ListMain;
