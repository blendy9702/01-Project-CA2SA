import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { IoIosArrowBack } from "react-icons/io";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import * as yup from "yup";
import { OrderContext } from "../../contexts/OrderContext";

// // yup schema
const menuSchema = yup.object({});

const MenuDetail = () => {
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

  // 쿼리 스트링 주소 처리
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log("쿼리스트링 menuId:", menuId);

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
  // 장바구니에 추가하기
  const handleSubmitForm = data => {
    addCartList(data);
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          navigate("/order/menulist");
        }}
      >
        <IoIosArrowBack />
      </button>

      <form onSubmit={handleSubmit(handleSubmitForm)}>
        {/* 숨긴 정보 */}
        <input
          type="text"
          name="menuId"
          id="menuId"
          value={menuInfo.menuId}
          {...register("menuId")}
        />
        <input
          type="text"
          name="menuName"
          id="menuName"
          value={menuInfo.menuName}
          {...register("menuName")}
        />
        <input
          type="number"
          name="count"
          id="count"
          value={1}
          {...register("count")}
        />
        {/* 메뉴 세부 옵션 */}
        {/* HOT/ICE */}
        <div className="option">
          <div className="title box">
            <h4>HOT/ICE</h4>
            <p>필수</p>
          </div>
          <div>
            <input
              type="radio"
              name="state"
              id="hot"
              value={"hot"}
              {...register("state")}
            />
            <label htmlFor="hot">HOT</label>
            <span className="addPrice">+0원</span>
          </div>
          <div>
            <input
              type="radio"
              name="state"
              id="ice"
              value={"ice"}
              {...register("state")}
            />
            <label htmlFor="ice">ICE</label>
            <span className="addPrice">+0원</span>
          </div>
        </div>
        {/* SIZE */}
        <div className="option">
          <div className="title box">
            <h4>SIZE</h4>
            <p>필수</p>
          </div>
          <div>
            <input
              type="radio"
              name="size"
              id="regular"
              value={"regular"}
              {...register("size")}
            />
            <label htmlFor="regular">R</label>
            <span className="addPrice">+0원</span>
          </div>
          <div>
            <input
              type="radio"
              name="size"
              id="large"
              value={"large"}
              {...register("size")}
            />
            <label htmlFor="large">L</label>
            <span className="addPrice">+500원</span>
          </div>
          <div>
            <input
              type="radio"
              name="size"
              id="liter"
              value={"liter"}
              {...register("size")}
            />
            <label htmlFor="liter">1L</label>
            <span className="addPrice">+2,000원</span>
          </div>
        </div>
        {/* 원두 옵션 */}
        <div className="option">
          <div className="title box">
            <h4>원두 옵션</h4>
            <p>선택</p>
          </div>
          <div>
            <input
              type="checkbox"
              name="beans"
              id="darkBeans"
              value={"다크 원두 변경"}
              {...register("beans")}
            />
            <label htmlFor="darkBeans">다크 원두 변경</label>
            <span className="addPrice">+0원</span>
          </div>
          <div>
            <input
              type="checkbox"
              name="beans"
              id="fruitBeans"
              value={"과일 원두 변경"}
              {...register("beans")}
            />
            <label htmlFor="fruitBeans">과일 원두 변경</label>
            <span className="addPrice">+0원</span>
          </div>
        </div>
        {/* 추가 */}
        <div className="option">
          <div className="title box">
            <h4>추가</h4>
            <p>선택</p>
          </div>
          <div>
            <input
              type="checkbox"
              name="addOption"
              id="shot"
              value={"샷추가"}
              {...register("addOption")}
            />
            <label htmlFor="darkBeans">샷추가</label>
            <span className="addPrice">+0원</span>
          </div>
          <div>
            <input
              type="checkbox"
              name="addOption"
              id="double-shot"
              value={"샷추가(2번)"}
              {...register("addOption")}
            />
            <label htmlFor="double-shot">샷추가(2번)</label>
            <span className="addPrice">+0원</span>
          </div>
          <div>
            <input
              type="checkbox"
              name="addOption"
              id="add-syrup"
              value={"시럽 추가"}
              {...register("addOption")}
            />
            <label htmlFor="add-syrup">시럽 추가</label>
            <span className="addPrice">+0원</span>
          </div>
        </div>
        <button type="submit">바로 주문</button>
        <button
          type="submit"
          onClick={() => {
            navigate("/order/menulist");
          }}
        >
          4,300원 담기
        </button>
      </form>
    </div>
  );
};

export default MenuDetail;
