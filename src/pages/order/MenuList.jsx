import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { getCafeInfo, getCafeMenuList } from "../../apis/order";
import Menu from "../../components/order/Menu";
import NavBar from "../../components/order/NavBar";
import { OrderContext } from "../../contexts/OrderContext";
import { SearchInput } from "../../styles/common";
import { CateButton, CateListDiv } from "../../styles/order/orderpage";

const MenuList = () => {
  // useSearchParams
  const [searchParams, setSearchParams] = useSearchParams();
  // useNavigate
  const navigate = useNavigate();
  const location = useLocation();
  const locationData = location.state;
  console.log("locatation", locationData);
  const cafeId = locationData[0];
  const cafeInfo = locationData[1];
  const fromPage = locationData[2].prev;

  const handleNavigateBack = () => {
    navigate(`/order?cafeName=${cafeId.cafeName}`, {
      state: [cafeId, cafeInfo],
    });
  };
  const handleNavigateMenuOption = item => {
    navigate(`/order/${item.menuId}`, {
      state: [cafeId, cafeInfo, { from: "/menu" }, item],
    });
  };
  const handleNavigatePayment = () => {
    navigate(`/order/payment?cafeName=${cafeInfo.cafeName}`, {
      state: [cafeId, cafeInfo, { from: "/menu" }],
    });
  };

  // 앞에서 보낸 navigate의 state 받아오기
  const { order } = useContext(OrderContext);
  // useState
  const [selectedCate, setSelectedCate] = useState(0);
  const [cafeMenuData, setCafeMenuData] = useState({});
  const [cateList, setCateList] = useState([]);

  // 정보 받아오기
  useEffect(() => {
    const getCafeMenu = async data => {
      try {
        const res = await axios.get(`/api/menu?cafeId=${data}`);
        const resultData = res.data.resultData;
        setCafeMenuData(resultData);
        setCateList(
          resultData.map((item, index) => {
            return item.categoryName;
          }),
        );
      } catch (error) {
        console.log(error);
      }
    };
    getCafeMenu(cafeId.cafeId);
  }, []);

  // cafeMenuData에 잘 담겨있는가
  useEffect(() => {
    // console.log("cafeMenuData", cafeMenuData);
    // console.log("cateList", cateList);
  }, [cafeMenuData, cateList]);

  // 메뉴 리스트에서 카테고리 정보 뽑아내기
  const cateArr = [...cateList];

  // console.log("categoryArr:", categoryArr);
  const handleClickCate = (item, index) => {
    setSelectedCate(index);
  };
  const itemCount = order.menuList.reduce((acc, curr) => {
    const totalCount = acc + curr.count;
    return totalCount;
  }, 0);

  return (
    <div style={{ maxWidth: "640px", position: "relative", margin: "0 auto" }}>
      <NavBar
        onClick={handleNavigateBack}
        icon={"back"}
        title={cafeInfo.cafeName}
      />
      <div
        className="header"
        style={{
          padding: "10px 20px",
          borderBottom: "5px solid var(--color-gray-100)",
        }}
      >
        <div>
          <SearchInput
            type="text"
            style={{ width: "100%", marginBottom: 10 }}
          />
        </div>
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
      </div>
      <div className="cate-detail" style={{ padding: 20 }}>
        <h3>고른 카테고리</h3>
        <div className="menu-list">
          {cafeMenuData[0]?.menu.map((item, index) => {
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
      <button
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
          height: 60,
          backgroundColor: "var(--primary-color)",
          position: "fixed",
          bottom: "80px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          border: "transparent",
          borderRadius: 8,
        }}
        type="button"
        onClick={handleNavigatePayment}
      >
        <div style={{ fontSize: 18, color: "#fff", fontWeight: "bold" }}>
          {itemCount}| 장바구니
        </div>
        <span
          style={{
            width: 15,
            height: 15,
            backgroundColor: "#fff",
            borderRadius: 10,
            color: "var(--primary-color)",
            fontSize: 12,
            fontWeight: "bold",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          {itemCount}
        </span>
      </button>
    </div>
  );
};

export default MenuList;
