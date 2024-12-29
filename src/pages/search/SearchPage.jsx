import axios from "axios";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import { IoCloseCircleSharp } from "react-icons/io5";
import styled from "styled-components";
import SearchList from "../../components/search/SearchList";
import { useNavigate } from "react-router-dom";

export const HeaderWrap = styled.header`
  width: 100%;
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  svg {
    font-size: 24px;
    color: var(--color-gray-900);
  }
`;
const SearchStyle = styled.label`
  width: 80%;
  height: 40px;
  position: relative;
  input {
    width: 100%;
    height: 100%;
    margin-left: 20px;
    background-color: var(--color-gray-100);
    border: 1px solid var(--color-gray-300);
    color: var(--color-gray-500);
    border-radius: 8px;
    outline: none;
    padding: 0 15px;
    font-size: 14px;
    &:focus {
      color: var(--color-gray-900);
      border: 1px solid var(--primary-color);
    }
  }
  > svg {
    position: absolute;
    right: -5px;
    top: 50%;
    font-size: 20px;
    transform: translateY(-50%);
    color: var(--color-gray-500);
    cursor: pointer;
  }
`;
const NoSearchRes = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  img {
    width: 150px;
  }
  p {
    margin-top: 15px;
    color: var(--color-gray-500);
  }
`;

const SearchPage = () => {
  const [isSearch, setIsSearch] = useState("");
  const [cafeData, setCafeData] = useState([]);
  const [state, setState] = useState({
    center: {
      lat: 35.868408,
      lng: 128.594054,
    },
    errMsg: null,
    isLoading: true,
  });

  const navigate = useNavigate(); //변수 할당시켜서 사용

  const getcafes = async () => {
    try {
      const res = await axios.get(
        `api/cafe/map?user_latitude=${state.center.lat}&user_longitude=${state.center.lng}`,
      );
      setCafeData(res.data.resultData);
      setState(prev => ({ ...prev, isLoading: false }));
      console.log(res.data.resultData);
    } catch (error) {
      console.log(error);
      setState(prev => ({ ...prev, isLoading: false }));
    }
  };

  const filterCafeList = isSearch
    ? cafeData.filter(
        cafeinfo =>
          cafeinfo.cafeName && // 필드 이름 확인
          cafeinfo.cafeName.toLowerCase().includes(isSearch.toLowerCase()), // 검색 조건
      )
    : [];

  const handleClear = () => setIsSearch(""); // 검색어 삭제
  const isFocused = isSearch.length > 0; // 검색어가 있으면 focus 상태로 간주

  useEffect(() => {
    getcafes();
  }, []);
  return (
    <div>
      <HeaderWrap>
        <IoIosArrowBack
          onClick={() => navigate(-1)}
          style={{ cursor: "pointer" }}
        />
        <SearchStyle htmlFor="">
          <input
            type="text"
            value={isSearch}
            placeholder="먹고싶은 메뉴나 매장을 찾아보세요"
            onChange={e => setIsSearch(e.target.value)}
          />
          <div>
            {/* 매장 검색 결과 렌더링 */}
            {isSearch && filterCafeList.length > 0 ? (
              <>
                <h2 style={{ "margin-top": "30px" }}>검색결과</h2>
                {filterCafeList.map(cafe => (
                  <SearchList key={cafe.cafeId} cafe={cafe} />
                ))}
              </>
            ) : isSearch ? (
              <NoSearchRes>
                <img src="../public/images/NoSearch.png" alt="" />
                <p>검색 결과가 없습니다. </p>
              </NoSearchRes>
            ) : null}
          </div>
          {isFocused ? (
            <IoCloseCircleSharp onClick={handleClear} />
          ) : (
            <FiSearch />
          )}
        </SearchStyle>
      </HeaderWrap>
    </div>
  );
};

export default SearchPage;
