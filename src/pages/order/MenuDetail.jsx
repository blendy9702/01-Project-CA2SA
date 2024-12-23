import { useLocation, useNavigate } from "react-router-dom";
import { getMenuDetailInfo } from "../../apis/order";
import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../../contexts/OrderContext";
import { IoIosArrowBack } from "react-icons/io";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// 메뉴 상세 데이터
const MenuDetailInfo = getMenuDetailInfo.resultData;

// yup schema
const menuSchema = yup.object({});

const MenuDetail = () => {
  //useNavigate
  // 앞에서 보낸 navigate의 state 받아오기
  const location = useLocation();
  const menuInfo = location.state;
  const navigate = useNavigate();

  // OrderContext
  const { order, setOrder, cartList, setCartList, addCartList } =
    useContext(OrderContext);
  // order가 제대로 바뀌고 있는지 확인
  useEffect(() => {
    console.log("order 상태:", order);
  }, [order]);

  // 장바구니에 추가하기
  const handleSubmitForm = data => {
    addCartList(data);
  };

  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(menuSchema),
    defaultValues: {
      state: "hot",
      size: "regular",
      beans: [],
      addOption: [],
    },
  });
  // 선택된 옵션들만 모아보기
  const [selectedOption, setSelectedOption] = useState([]);

  return (
    <div>
      <div className="top">
        <button
          type="button"
          onClick={() => {
            navigate("/order/menulist");
          }}
        >
          <IoIosArrowBack />
        </button>
        <div className="cafeName"></div>
      </div>

      <div>
        <div className="menuInfoBox">
          <div className="menuThum">
            <img src={MenuDetailInfo.menuPic} alt="#" />
          </div>
          <div className="menuInfo">
            <p className="menuName">{MenuDetailInfo.name}</p>
            <p className="comment">{MenuDetailInfo.comment}</p>
            <p className="comment">{MenuDetailInfo.price}</p>
          </div>
        </div>
        <form className="formBox" onSubmit={handleSubmit(handleSubmitForm)}>
          {/* 숨긴 정보 */}
          <label>MenuId</label>
          <input
            type="text"
            name="menuId"
            id="menuId"
            value={menuInfo.menuId}
            {...register("menuId")}
          />
          <label>메뉴 이름</label>
          <input
            type="text"
            name="menuName"
            id="menuName"
            value={menuInfo.menuName}
            {...register("menuName")}
          />
          <label>수량</label>
          <input
            type="number"
            name="count"
            id="count"
            value={1}
            {...register("count")}
          />
          {/* 유저 선택 옵션 */}
          {MenuDetailInfo.option.map((item, index) => {
            return (
              <div key={index} className="optionBox">
                <p className="optionTitle">{item.optionName}</p>
                <p className="required">
                  {item.required === 1 ? "필수" : "선택"}
                </p>
                <div className="optionList">
                  {item.price.map((_item, _index) => {
                    return (
                      <div key={_index}>
                        <input
                          type={item.required === 1 ? "radio" : "checkbox"}
                          name={item.optionTitle}
                          value={_item.value}
                          id={item.optionTitle}
                          {...register(`${item.optionTitle}`)}
                        />
                        <label htmlFor={item.optionTitle}>
                          {_item.optionName}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
          <button
            type="submit"
            onClick={() => {
              navigate("/order/menulist");
            }}
          >
            바로주문
          </button>
          <button
            type="submit"
            onClick={() => {
              navigate("/order/menulist");
            }}
          >
            금액 담기
          </button>
        </form>
      </div>
    </div>
  );
};

export default MenuDetail;
