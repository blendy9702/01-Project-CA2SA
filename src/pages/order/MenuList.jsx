import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../../components/order/Menu";
import { OrderContext } from "../../contexts/OrderContext";

//임시 카페 메뉴 목록
const getCafeMenuList = [
  {
    menuId: 1,
    menuName: "아메리카노",
    price: "1500",
    comment: "맛있다1",
    menuPic: "#",
  },
  {
    menuId: 2,
    menuName: "카페라떼",
    price: "2000",
    comment: "맛있다2",
    menuPic: "#",
  },
  {
    menuId: 3,
    menuName: "밀크티",
    price: "3000",
    comment: "맛있다3",
    menuPic: "#",
  },
  {
    menuId: 4,
    menuName: "짜장면",
    price: "4000",
    comment: "맛있다4",
    menuPic: "#",
  },
];
// 카페 정보 불러온 결과
const getCafeInfo = {
  resultMessage: "1",
  resultData: {
    cafeName: "컴포즈 동성로점",
    location: "대구 중구 달구벌대로 2123 1층 (우)41943",
    tel: "0532596648",
    cafePic: "String",
    openTime: "09:00",
    closeTime: "22:00",
  },
};

const MenuList = () => {
  const navigate = useNavigate();
  // 앞에서 보낸 navigate의 state 받아오기
  const { order } = useContext(OrderContext);

  const [selectedCate, setSelectedCate] = useState("시즌메뉴");

  return (
    <div>
      <div className="header">
        <Link to="/">X</Link>
        <div className="title">{getCafeInfo.resultData.cafeName}</div>
        <div className="search-bar">
          {/* 검색창 */}
          {/*검색 입력시, searchFormData에 데이터 담고, 1번 방법. 카페 데이터 내에 메뉴 베열이 있다면, id나 name등으로 filter 돌려서 보여주기 2번 방법. 입력값을 보낸 뒤 결과데이터를 받아서 그걸 리스트에 띄우기*/}
          <input type="text" />
        </div>
        <div className="cate-list">
          <button
            type="button"
            onClick={() => {
              setSelectedCate("시즌메뉴");
            }}
          >
            시즌메뉴
          </button>
          <button
            type="button"
            onClick={() => {
              setSelectedCate("COFFEE");
            }}
          >
            COFFEE
          </button>
          <button
            type="button"
            onClick={() => {
              setSelectedCate("DECAFFEINE");
            }}
          >
            DECAFFEINE
          </button>
          <button
            type="button"
            onClick={() => {
              setSelectedCate("ADE");
            }}
          >
            ADE
          </button>
        </div>
      </div>
      <div className="cate-detail">
        <h3>{selectedCate}</h3>
        <div className="menu-list">
          {/* 지금은 데이터 따라 리스트 나열만 있음.. */}
          {/* 클릭시 메뉴 아이디를 통해, 메뉴 상세 정보를 불러오기 */}
          {getCafeMenuList.map((item, index) => {
            return (
              <div
                key={index}
                style={{ display: "flex" }}
                onClick={() =>
                  navigate(
                    `/order/menudetail?menuId=${item.menuId}&menuName=${item.menuName}`,
                    {
                      state: item,
                    },
                  )
                }
              >
                <Menu item={item} index={index} />
              </div>
            );
          })}
        </div>
      </div>
      <button
        type="button"
        onClick={() => {
          navigate(
            `/order/payment?cafeName=${getCafeInfo.resultData.cafeName}`,
            { state: getCafeInfo.resultData.cafeName },
          );
        }}
      >
        금액 | 장바구니 {order.menu.length}
      </button>
    </div>
  );
};

export default MenuList;
