import axios from "axios";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ListBox from "./ListBox";

const ListitemBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ListMain = () => {
  const [cafeData, setCafeData] = useState([]); // API 데이터를 저장할 state

  useEffect(() => {
    // 비동기 함수 정의
    const fetchCafeData = async data => {
      try {
        const res = await axios.get("api/cafe?cafe_id=3"); // API 호출
        const { resultData } = res.data; // 필요한 데이터 추출

        console.log(res.data);

        setCafeData(resultData); // 상태 업데이트
      } catch (error) {
        console.error("API 호출 중 오류 발생:", error);
      }
    };

    fetchCafeData(); // API 호출 함수 실행
  }, []);

  return (
    <div>
      <Link to="#">
        <img src="images/main_visual_image-0.png" alt="mainBanner" />
      </Link>
      <div>
        <h2>요즘은 #아샷추 가 대세</h2>
        <Link to="#">
          <span>
            더보기
            <IoIosArrowForward />
          </span>
        </Link>
        <ListitemBox>
          {cafeData.map(cafe => (
            <ListBox key={cafe.id} />
          ))}
        </ListitemBox>
      </div>
      <div>
        <h2>나와 가까운 매장</h2>
        <Link to="#">
          <span>
            더보기
            <IoIosArrowForward />
          </span>
        </Link>
        <ListitemBox></ListitemBox>
      </div>
      <Link to="#">
        <img src="https://picsum.photos/600/100" alt="" />
      </Link>
      <Link to="#">
        <img src="https://picsum.photos/600/100" alt="" />
      </Link>
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
