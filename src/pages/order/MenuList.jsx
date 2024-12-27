import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCafeInfo, getCafeMenuList } from "../../apis/order";
import Menu from "../../components/order/Menu";
import NavBar from "../../components/order/NavBar";
import { OrderContext } from "../../contexts/OrderContext";
import { SearchInput } from "../../styles/common";
import { CateButton, CateListDiv } from "../../styles/order/orderpage";

const MenuList = () => {
  const navigate = useNavigate();
  // 앞에서 보낸 navigate의 state 받아오기
  const { order } = useContext(OrderContext);

  const [selectedCate, setSelectedCate] = useState(0);
  useEffect(() => {
    console.log("cafeId:", 2);
    getCafeMenuList(2); //임시 아이디 입력
  }, []);
  const cateList = ["커피", "디카페인", "티", "시즌메뉴"];
  const handleClickCate = (item, index) => {
    setSelectedCate(index);

    // 예정: cateId에 따른 메뉴 불러오기 axios 실행
  };
  return (
    <div style={{ maxWidth: "640px;", position: "relative", margin: "0 auto" }}>
      <NavBar path={"/"} title={"cafeName"} scrollevent={false} />
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
          {cateList.map((item, index) => {
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
        <h3>{cateList[selectedCate]}</h3>
        <div className="menu-list">
          {/* 지금은 데이터 따라 리스트 나열만 있음.. */}
          {/* 클릭시 메뉴 아이디를 통해, 메뉴 상세 정보를 불러오기 */}
          {getCafeMenuList.map((item, index) => {
            return (
              <div
                key={index}
                style={{ display: "flex" }}
                onClick={() =>
                  navigate(`/order/${item.menuId}`, {
                    state: item,
                  })
                }
              >
                <Menu item={item} index={index} />
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
        onClick={() => {
          navigate(
            `/order/payment?cafeName=${getCafeInfo.resultData.cafeName}`,
            { state: getCafeInfo.resultData.cafeName },
          );
        }}
      >
        <sapn style={{ fontSize: 18, color: "#fff", "font-weight": "bold" }}>
          {order.menuList.reduce((acc, curr) => {
            const totalCount = acc + curr.count;
            return totalCount;
          }, 0)}{" "}
          | 장바구니
        </sapn>
        <span
          style={{
            width: 15,
            height: 15,
            backgroundColor: "#fff",
            borderRadius: 10,
            color: "var(--primary-color)",
            fontSize: 12,
            "font-weight": "bold",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          {order.menuList.reduce((acc, curr) => {
            const totalCount = acc + curr.count;
            return totalCount;
          }, 0)}
        </span>
      </button>
    </div>
  );
};

export default MenuList;
