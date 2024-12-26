import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoIosArrowBack } from "react-icons/io";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getMenuDetailInfo } from "../../apis/order";
import { getMenuOption } from "../../apis/orderapi";
import { OrderContext } from "../../contexts/OrderContext";

// 메뉴 상세 데이터
const MenuDetailInfo = getMenuDetailInfo.resultData;

const MenuDetail = () => {
  // 통신용 useEffect
  useEffect(() => {
    getMenuOption(1); //임시 메뉴 아이디 입력
  }, []);
  // react-hook-form
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      options: [],
      price: MenuDetailInfo.price,
      menuId: 1,
      menuName: MenuDetailInfo.menuName,
      count: 1,
    },
  });
  // useParams
  const { id } = useParams();
  //useNavigate
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

  // 체크된 옵션을 [{menuOptionId:""}]로 바꾸기 위한 useState;
  const [options, setOptions] = useState([]);
  // 옵션 추가, 가격 추가
  const handleChange = (e, item) => {
    const option = { menuOptionId: e.target.value };
    setOptions(
      prevOptions =>
        e.target.checked
          ? [...prevOptions, option] // 옵션 추가
          : prevOptions.filter(opt => opt.menuOptionId !== option.menuOptionId), // 옵션 제거
    );
    // 가격 업데이트
    if (e.target.checked) {
      setTotalPrice(prevPrice => prevPrice + item.addPrice);
    } else {
      setTotalPrice(prevPrice => prevPrice - item.addPrice);
    }
  };

  // 금액 계산용 useState
  const [totalPrice, setTotalPrice] = useState(MenuDetailInfo.price);
  useEffect(() => {
    setValue("price", totalPrice);
  }, [totalPrice, setValue]);

  useEffect(() => {
    console.log("options:", options);
  }, [options]);

  // 장바구니에 추가하기
  const handleSubmitForm = data => {
    addCartList(data);
  };
  return (
    <div>
      <div className="top">
        <button
          type="button"
          onClick={() => {
            navigate("/order/menu");
          }}
        >
          <IoIosArrowBack />
        </button>
        <div className="cafeName"></div>
      </div>
      <div className="orderDetail">
        <div className="menuInfo">
          <p className="menuName">{MenuDetailInfo.menuName}</p>
          <p className="comment">{MenuDetailInfo.comment}</p>
          <p className="comment">{MenuDetailInfo.price}</p>
        </div>
      </div>
      <div className="formBox">
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          {/* 숨김 정보 */}
          <div className="hiddenInfo">
            <label>MenuId</label>
            <input
              type="text"
              name="menuId"
              id="menuId"
              value={1} // 임시 메뉴 아이디
              {...register("menuId")}
            />
            <label>메뉴 이름</label>
            <input
              type="text"
              name="menuName"
              id="menuName"
              value={MenuDetailInfo.menuName}
              {...register("menuName")}
            />
            <label>수량</label>
            <input
              type="number"
              name="count"
              id="count"
              value={1}
              {...register("count", { setValueAs: value => Number(value) })}
            />
            <label>총 금액</label>
            <input
              type="text"
              name="price"
              id="price"
              value={totalPrice}
              {...register("price")}
            />
          </div>

          {/* 선택 옵션 */}
          {MenuDetailInfo.options.map((item, index) => {
            return (
              <div key={index}>
                <input
                  type="checkbox"
                  id={item.optionName}
                  value={item.menuOptionId}
                  {...register("options")}
                  onChange={e => {
                    if (e.target.checked === true) {
                      setValue(`options[0]`, { menuOptionId: e.target.value });
                    }
                    handleChange(e, item);
                  }}
                />
                <label htmlFor={item.optionName}>{item.optionName}</label>
                <span className="optionPrice">+{item.addPrice}원</span>
              </div>
            );
          })}
          <button
            type="submit"
            onClick={() => {
              navigate("/order/payment");
            }}
          >
            바로주문
          </button>
          <button
            type="submit"
            onClick={() => {
              navigate("/order/menu");
            }}
          >
            금액: {totalPrice}
          </button>
        </form>
      </div>
    </div>
  );
};

export default MenuDetail;
