import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoIosArrowBack } from "react-icons/io";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { OrderContext } from "../../contexts/OrderContext";

const MenuDetail = () => {
  //useNavigate
  const navigate = useNavigate();
  const location = useLocation();
  const locationData = location.state;
  console.log("LocationData:", locationData);
  const cafeId = locationData[0];
  const cafeInfo = locationData[1];
  const fromPage = locationData[2].from;
  const menuInfo = locationData[3];
  const menuId = menuInfo.menuId;

  const handleNavigateBack = () => {
    navigate(fromPage, {
      state: [{ cafeId: cafeId.cafeId }, cafeInfo, menuInfo],
    });
  };
  const handleNavigateList = () => {
    navigate("/order/menu", {
      state: [{ cafeId: cafeId.cafeId }, cafeInfo, menuInfo],
    });
  };
  const handleNavigatePaymet = () => {
    navigate(`/order/payment?cafeName=${cafeInfo.cafeName}`, {
      state: [{ cafeId: cafeId.cafeId }, cafeInfo, { from: "/menu" }],
    });
  };

  // OrderContext
  const { order, setOrder, cartList, setCartList, addCartList } =
    useContext(OrderContext);
  useEffect(() => {
    console.log("order:", order);
  }, [order]);

  //메뉴 상세 옵션 불러오기
  const [optionList, setOptionList] = useState([]);
  useEffect(() => {
    const getMenuOption = async data => {
      try {
        const res = await axios.get(`/api/menu/detail?menuId=${data}`);
        const resultData = res.data.resultData;
        setOptionList(resultData);
      } catch (error) {
        console.log(error);
      }
    };
    getMenuOption(menuId);
  }, []);

  // useEffect(() => {
  //   console.log(`옵션 리스트:`, optionList);
  // }, [optionList]);

  // react-hook-form
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      options: [],
      price: locationData.price,
      menuId: 1,
      menuName: locationData.menuName,
      count: 1,
    },
  });

  // useParams
  const { id } = useParams();

  // 금액 계산용 useState
  const [totalPrice, setTotalPrice] = useState(menuInfo.price);
  useEffect(() => {
    setValue("price", totalPrice);
  }, [totalPrice, setValue]);

  // 체크된 옵션을 [{menuOptionId:""}]로 바꾸기 위한 useState;
  const [options, setOptions] = useState([]);
  //옵션 추가, 가격 추가
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

  // useEffect(() => {
  //   console.log("options:", options);
  // }, [options]);

  // 옵션만 뽑아서 배열
  const optionListArr = [...optionList];
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
        <div className="locationData">
          <p className="menuName">{menuInfo.menuName}</p>
          <p className="comment">{menuInfo.comment}</p>
          <p className="comment">{menuInfo.price}</p>
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
              value={menuId} // 임시 메뉴 아이디
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
              {...register("count", { setValueAs: value => Number(value) })}
            />
            <label>총 금액</label>
            <input
              type="text"
              name="price"
              id="price"
              value={totalPrice}
              {...register("price", { setValueAs: value => Number(value) })}
            />
          </div>

          {/* 선택 옵션 */}
          {optionListArr.map((item, index) => {
            return (
              <div key={index}>
                <input
                  type="checkbox"
                  id={item.optionName}
                  value={item.optionName}
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
          <button type="submit" onClick={handleNavigatePaymet}>
            바로주문
          </button>
          <button type="submit" onClick={handleNavigateList}>
            금액: {totalPrice}
          </button>
        </form>
      </div>
    </div>
  );
};

export default MenuDetail;
