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
const SearchResultsWrap = styled.div`
  padding: 20px;
  h4 {
    margin: 20px 0 10px 0;
    &:first-child {
      margin: 0;
    }
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
  const [searchResults, setSearchResults] = useState({
    menuResults: [],
    cafeResults: [],
  }); // 검색 결과 상태
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
        setSearchResults(prev => ({
          ...prev,
          cafeResults: res.data.resultData,
        }));
        setSearchTriggered(true); // 검색이 실행됨을 표시
      }
    } catch (error) {
      console.log(error);
      setSearchResults(prev => ({
        ...prev,
        cafeResults: [],
      }));
      setSearchTriggered(true); // 검색 실행 상태는 true로 유지
    }
  };
  const getmenus = async () => {
    try {
      {
        console.log("검색 실행:", isSearch);
        const res = await axios.get(
          `api/cafe?search_menu_name=${isSearch}&max_distance=1000&user_latitude=${state.center.lat}&user_longitude=${state.center.lng}`,
        );
        setSearchResults(prev => ({
          ...prev,
          menuResults: res.data.resultData,
        }));
        setSearchTriggered(true); // 검색이 실행됨을 표시
      }
    } catch (error) {
      console.log(error);
      setSearchResults(prev => ({
        ...prev,
        menuResults: [],
      }));
      setSearchTriggered(true); // 검색 실행 상태는 true로 유지
    }
  };

  const handleClear = () => {
    setIsSearch(""); // 검색어 초기화
    setSearchResults({
      menuResults: [],
      cafeResults: [],
    }); // 검색 결과 초기화
    setSearchTriggered(false); // 검색 상태 초기화
  };
  const isFocused = isSearch.length > 0; // 검색어가 있으면 focus 상태로 간주

  const handleClickKeyDown = async e => {
    if (e.key === "Enter" && isSearch.trim() !== "") {
      setSearchTriggered(true); // 검색 실행 표시
      await Promise.all([getcafes(), getmenus()]); // 두 API 호출 병렬 실행
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
      <main>
        <SearchResultsWrap>
          {/* Enter를 눌렀을 때만 검색 결과 렌더링 */}
          {searchTriggered ? (
            <>
              {/* 메뉴 검색 결과 */}
              {searchResults.menuResults.length > 0 && (
                <>
                  <h4>메뉴 검색 결과</h4>
                  {searchResults.menuResults
                    .slice() // 원본 배열을 복사하여 정렬 시 원본 배열 변경 방지
                    .sort((a, b) => a.distance - b.distance) // distance를 기준으로 오름차순 정렬
                    .map(menu => (
                      <SearchList
                        key={menu.menuId}
                        cafe={menu}
                        className="searchList"
                      />
                    ))}
                </>
              )}

              {/* 카페 검색 결과 */}
              {searchResults.cafeResults.length > 0 && (
                <>
                  <h4>카페 검색 결과</h4>
                  {searchResults.cafeResults
                    .slice() // 원본 배열을 복사하여 정렬 시 원본 배열 변경 방지
                    .sort((a, b) => a.distance - b.distance) // distance를 기준으로 오름차순 정렬
                    .map(cafe => (
                      <SearchList key={cafe.cafeId} cafe={cafe} />
                    ))}
                </>
              )}

              {/* 검색 결과 없음 */}
              {searchResults.menuResults.length === 0 &&
                searchResults.cafeResults.length === 0 && (
                  <NoSearchRes>
                    <img src="/images/NoSearch.webp" alt="" />
                    <p>검색 결과가 없습니다.</p>
                  </NoSearchRes>
                )}
            </>
          ) : null}
        </SearchResultsWrap>
      </main>
      <DockBar />
    </div>
  );
};

export default SearchPage;
