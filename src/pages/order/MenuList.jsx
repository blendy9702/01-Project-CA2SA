import axios from "axios";
import { useContext, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Menu from "../../components/order/Menu";
import NavBar from "../../components/order/NavBar";
import { OrderContext } from "../../contexts/OrderContext";
import { SearchInput } from "../../styles/common";
import {
  CateButton,
  CateListDiv,
  LayoutDiv,
  OrderButton,
} from "../../styles/order/orderpage";
import { FiSearch } from "react-icons/fi";
import BucketModal from "../../components/order/BucketModal";

const MenuList = () => {
  // 앞에서 보낸 navigate의 state 받아오기
  const { order, setOrder } = useContext(OrderContext);
  // useSearchParams
  const [searchParams, setSearchParams] = useSearchParams();
  const cafeId = parseInt(searchParams.get("cafeId"));
  // useNavigate
  const navigate = useNavigate();
  const location = useLocation();
  const locationData = location.state;
  // useState
  const [selectedCate, setSelectedCate] = useState(0);
  const [cafeMenuData, setCafeMenuData] = useState({});
  const [cateList, setCateList] = useState([]);
  const [allMenu, setAllMenu] = useState([]);
  const [cafeInfo, setCafeInfo] = useState({});
  const [showSearchMenu, setShowSearchMenu] = useState(false);
  const [text, setText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleNavigateBack = () => {
    navigate(-1);
  };
  const handleNavigateMenuOption = item => {
    order.cafeId === cafeId || order.cafeId === ""
      ? navigate(`/order/menu/detail?menuId=${item.menuId}`, {
          state: locationData,
        })
      : setShowPopup(true);
  };
  const handleNavigatePayment = () => {
    navigate(`/order/payment?cafeId=${cafeId}`, { state: locationData });
  };

  // 정보 받아오기
  useEffect(() => {
    const getCafeMenu = async data => {
      try {
        const res = await axios.get(`/api/menu?cafeId=${cafeId}`);
        // console.log("메뉴 리스트 통신 결과:", res.data);
        const resultData = res.data.resultData;
        if (resultData) {
          setCafeMenuData(resultData);
          setCateList(
            resultData.map((item, index) => {
              return item.categoryName;
            }),
          );
          const allMenuArr = resultData.map((item, index) => {
            return item.menu;
          });
          const combinedMenuArr = allMenuArr.reduce((acc, curr) => {
            return acc.concat(curr);
          }, []);
          setAllMenu(combinedMenuArr);
        }
      } catch (error) {
        console.log("메뉴 리스트 통신 결과:", error);
      }
    };
    getCafeMenu();
  }, []);
  useEffect(() => {
    setCafeInfo(locationData);
    // console.log("locationData cafeInfo", cafeInfo);
  }, [locationData, cafeInfo]);
  // cafeMenuData에 잘 담겨있는가
  useEffect(() => {
    // console.log("카테고리 상관 없이 모든 메뉴:", allMenu);
  }, [allMenu]);
  // 검색창 내용 따라 allMenu에서 걸러내기.

  // 메뉴 리스트에서 카테고리 정보 뽑아내기
  const cateArr = [...cateList];
  // 카테고리 선택에 따라 고른 카테고리와 다른 카테고리를 구별할 수 있도록 작업.
  const handleClickCate = (item, index) => {
    setSelectedCate(index);
  };
  // 장바구니 수량
  const itemCount = order.menuList.reduce((acc, curr) => {
    const totalCount = acc + curr.count;
    return totalCount;
  }, 0);
  // 금액 계산
  const showPrice = order.menuList
    .reduce((acc, curr) => {
      const totalPrice = acc + curr.price * curr.count;
      return totalPrice;
    }, 0)
    .toLocaleString();

  useEffect(() => {
    // console.log("order:", order);
  }, [order]);

  // 검색 결과 필터링하기
  const sortAllMenu = useMemo(() => {
    return allMenu.filter(item => item.menuName.includes(searchText));
  }, [searchText, allMenu]);

  return (
    <div
      style={{
        position: "relative",
        paddingBottom: 100,
        backgroundColor: "#fff",
      }}
    >
      <NavBar
        onClick={handleNavigateBack}
        icon={"back"}
        title={cafeInfo ? cafeInfo.cafeName : "로딩중"}
      />
      <LayoutDiv>
        <div
          className="header"
          style={{
            padding: "10px 20px",
            borderBottom: "5px solid var(--color-gray-100)",
          }}
        >
          {/* 검색 버튼 */}
          <div
            style={{ width: "100%", marginBottom: 10, position: "relative" }}
          >
            <SearchInput
              type="text"
              id="searchBar"
              style={{ width: "100%" }}
              placeholder="메뉴를 검색해보세요"
              value={text}
              onChange={e => {
                setText(e.target.value);
                setShowSearchMenu(true);
              }}
              onKeyDown={e => {
                if (e.key === "Enter") {
                  setSearchText(e.target.value);
                  console.log(searchText);
                  // setShowSearchMenu(false);
                }
              }}
            />
            <label
              htmlFor="searchBar"
              style={{
                position: "absolute",
                right: 10,
                top: 10,
                fontSize: 18,
                color: "var(--color-gray-500)",
              }}
            >
              <FiSearch />
            </label>
          </div>
          {/* 카테고리 버튼 */}
          {showSearchMenu ? null : (
            <CateListDiv>
              {cateArr.map((item, index) => {
                return (
                  <CateButton
                    key={index}
                    type="button"
                    onClick={() => {
                      handleClickCate(item, index);
                    }}
                    isSelected={selectedCate === index}
                  >
                    {item}
                  </CateButton>
                );
              })}
            </CateListDiv>
          )}
        </div>
        {/* 메뉴 리스트 */}
        {showSearchMenu ? (
          <div className="cate-detail" style={{ padding: 20 }}>
            <div className="menu-list">
              {sortAllMenu.length > 0 ? (
                sortAllMenu.map((item, index) => {
                  return (
                    <div key={index}>
                      <Menu
                        item={item}
                        index={index}
                        onClick={() => handleNavigateMenuOption(item)}
                      />
                    </div>
                  );
                })
              ) : (
                <div className="notFound">
                  <div className="thum">
                    <img src="/images/NoSearch.png" alt="" />
                  </div>
                  <p>검색 결과가 없습니다.</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="cate-detail" style={{ padding: 20 }}>
            <h3>{cateArr[selectedCate]}</h3>
            <div className="menu-list">
              {cafeMenuData[selectedCate]?.menu.map((item, index) => {
                return (
                  <div key={index}>
                    <Menu
                      item={item}
                      index={index}
                      onClick={() => handleNavigateMenuOption(item)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {/* 모달창 */}
        {showPopup ? (
          <BucketModal
            showPopup={showPopup}
            setShowPopup={setShowPopup}
            cafeInfo={cafeInfo}
          />
        ) : null}
        {/* 장바구니 버튼 */}
        <OrderButton
          type="button"
          onClick={handleNavigatePayment}
          disabled={order.menuList.length === 0 ? true : false}
        >
          {order.menuList.length === 0
            ? `상품을 담아주세요`
            : ` ${showPrice}원 | 장바구니`}

          <span className="circle">{itemCount}</span>
        </OrderButton>
      </LayoutDiv>
    </div>
  );
};

export default MenuList;
