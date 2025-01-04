import axios from "axios";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import { IoCloseCircleSharp } from "react-icons/io5";
import styled from "@emotion/styled";
import SearchList from "../../components/search/SearchList";
import { useNavigate } from "react-router-dom";
import DockBar from "../../components/DockBar";

export const HeaderWrap = styled.header`
  width: 100%;
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  > svg {
    font-size: 24px;
    color: var(--color-gray-900);
    cursor: pointer;
    margin-right: auto;
  }
`;

const SearchStyle = styled.label`
  width: 90%;
  height: 40px;
  position: relative;
  input {
    width: 100%;
    height: 100%;
    background-color: var(--color-white);
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
    right: 15px;
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
  const [isSearch, setIsSearch] = useState(""); // 검색어 상태
  const [cafeData, setCafeData] = useState([]); // 전체 카페 데이터
  const [searchTriggered, setSearchTriggered] = useState(false); // Enter 키로 검색 실행 여부
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
      {
        console.log("검색 실행:", isSearch);
        const res = await axios.get(
          `api/cafe?search_cafe_name=${isSearch}&max_distance=1000&user_latitude=${state.center.lat}&user_longitude=${state.center.lng}`,
        );
        setCafeData(res.data.resultData);
        setSearchTriggered(true); // 검색이 실행됨을 표시
      }
    } catch (error) {
      console.log(error);
      setState(prev => ({ ...prev, isLoading: false }));
      setCafeData([]); // 에러 발생 시 결과 초기화
      setSearchTriggered(true); // 검색 실행 상태는 true로 유지
    }
  };

  const handleClear = () => {
    setIsSearch(""); // 검색어 초기화
    setCafeData([]); // 검색 결과 초기화
    setSearchTriggered(false); // 검색 상태 초기화
  };
  const isFocused = isSearch.length > 0; // 검색어가 있으면 focus 상태로 간주

  const handleClickKeyDown = e => {
    // e.key를 사용하여 키 입력 확인
    if (e.key === "Enter") {
      if (isSearch.trim() !== "") {
        getcafes(); // 검색 API 호출
      } else {
        setCafeData([]); // 검색어가 비어있을 경우 결과 초기화
        setSearchTriggered(true); // 빈 검색 처리
      }
    }
  };
  return (
    <div>
      <HeaderWrap>
        <IoIosArrowBack onClick={() => navigate(-1)} />
        <SearchStyle htmlFor="">
          <input
            type="text"
            value={isSearch}
            placeholder="먹고싶은 메뉴나 매장을 찾아보세요"
            onChange={e => setIsSearch(e.target.value)}
            onKeyDown={e => handleClickKeyDown(e)}
          />
          {isFocused ? (
            <IoCloseCircleSharp onClick={handleClear} />
          ) : (
            <FiSearch />
          )}
        </SearchStyle>
      </HeaderWrap>
      <div style={{ padding: "0 20px" }}>
        {/* Enter를 눌렀을 때만 검색 결과 렌더링 */}
        {searchTriggered ? (
          cafeData.length > 0 ? (
            <>
              <h2 style={{ marginTop: "30px" }}>검색결과</h2>
              {cafeData.map(cafe => (
                <SearchList key={cafe.cafeId} cafe={cafe} />
              ))}
            </>
          ) : (
            <NoSearchRes>
              <img src="/images/NoSearch.png" alt="" />
              <p>검색 결과가 없습니다.</p>
            </NoSearchRes>
          )
        ) : null}
      </div>

      <DockBar />
    </div>
  );
};

export default SearchPage;
