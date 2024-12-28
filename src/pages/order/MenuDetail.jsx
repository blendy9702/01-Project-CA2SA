import { FaCheckSquare } from "react-icons/fa";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoIosArrowBack } from "react-icons/io";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { OrderContext } from "../../contexts/OrderContext";
import NavBar from "../../components/order/NavBar";
import { PrimaryButton, SecondaryButton } from "../../styles/common";

const MenuDetail = () => {
  // useParams
  const [searchParams, setSearchParams] = useSearchParams();
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
        // const res = await axios.get(`/api/menu/detail?menuId=${data}`); ///api/menu/detail
        const res = await axios.get(`/api/cafe/menu/option?menu_id=${data}`); ////api/cafe/menu/option
        const resultData = res.data.resultData;
        console.log(`menuId: ${menuId}의 상세 옵션 불러오기:`, resultData);
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
      cafeId: "",
      options: [],
      price: menuInfo.price,
      menuId: "",
      menuName: menuInfo.menuName,
      count: 1,
    },
  });
  // cafeId, menuId에 value값 넣기
  useEffect(() => {
    setValue("cafeId", cafeId.cafeId);
    setValue("menuId", menuId);
  }, [cafeId, menuId, setValue]);

  // 금액 계산용 useState
  const [totalPrice, setTotalPrice] = useState(menuInfo.price);
  useEffect(() => {
    setValue("price", totalPrice);
  }, [totalPrice, setValue]);

  // 체크된 옵션을 [{menuOptionId:""}]로 바꾸기 위한 useState;
  const [options, setOptions] = useState([]);
  //옵션 추가, 가격 추가
  const handleChange = (e, item) => {
    const option = { menuOptionId: parseInt(e.target.value) };
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

  useEffect(() => {
    console.log("options:", options);
  }, [options]);

  // 옵션만 뽑아서 배열
  const optionListArr = [...optionList];
  // 장바구니에 추가하기
  const handleSubmitForm = data => {
    console.log("formData:", data);
    const fixedFormData = { ...data, options: options };
    addCartList(fixedFormData);
  };
  return (
    <div>
      <NavBar
        onClick={handleNavigateBack}
        icon={"back"}
        title={cafeInfo.cafeName}
      />
      <div className="menu-thum" style={{ width: "100%", height: 375 }}>
        <img
          src={
            menuInfo.menuPic
              ? `/CA2SA/image/cafe/2/${menuInfo.menuPic}`
              : "/images/order/cat2.jpg"
          }
          alt="메뉴 사진"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div
        className="orderDetail"
        style={{
          padding: "20px 20px 17px 22px",
          borderBottom: "5px solid var(--color-gray-100)",
        }}
      >
        <div className="locationData">
          <p
            className="menuName"
            style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}
          >
            {menuInfo.menuName}
          </p>
          <p
            className="comment"
            style={{
              fontSize: 16,
              fontWeight: "light",
              marginBottom: 8,
              color: "var(--color-gray-700)",
              letterSpacing: "-0.5px",
            }}
          >
            {menuInfo.comment}
          </p>
          <p
            className="price"
            style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}
          >
            {menuInfo.price.toLocaleString()} 원
          </p>
        </div>
      </div>
      <div className="formBox" style={{ padding: "0px 20px 100px 20px" }}>
        <form
          onSubmit={handleSubmit(handleSubmitForm)}
          style={{ display: "flex", flexDirection: "column", gap: 20 }}
        >
          {/* 숨김 정보 */}
          <div>
            <label>카페 아이디</label>
            <div className="hiddenInfo">
              {/* <input
                type="number"
                name="cafeId"
                id="cafeId"
                value={cafeId.cafeId}
                {...register("cafeId")}
              /> */}
              <label>메뉴 아이디</label>
              <input
                type="text"
                name="menuId"
                id="menuId"
                value={menuId}
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
                type="text"
                name="count"
                id="count"
                value={1}
                {...register("count", { setValueAs: value => Number(value) })}
              />
              <label>가격</label>
              {/* <input
                type="text"
                name="price"
                id="price"
                value={totalPrice}
                {...register("price", { setValueAs: value => Number(value) })}
              /> */}
            </div>
          </div>

          {/* 선택 옵션 */}
          {optionListArr.map((item, index) => {
            return (
              <div
                className="optionCheck"
                key={index}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <input
                  type="checkbox"
                  id={item.optionName}
                  value={item.menuOptionId}
                  {...register("options")}
                  onChange={e => {
                    if (e.target.checked === true) {
                      setValue(`options[0]`, {
                        menuOptionId: e.target.value,
                      });
                    }
                    handleChange(e, item);
                  }}
                  style={{
                    width: "20px",
                    height: 20,
                  }}
                />
                <label
                  htmlFor={item.optionName}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: 5,
                  }}
                >
                  {item.optionName}
                </label>
                <span className="optionPrice">+{item.addPrice}원</span>
              </div>
            );
          })}
          <div
            className="button-box"
            style={{
              display: "flex",
              gap: 10,
              width: "600px",
              position: "fixed",
              bottom: "80px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <SecondaryButton
              type="submit"
              onClick={handleNavigatePaymet}
              style={{ width: "50%", height: 60 }}
            >
              바로주문
            </SecondaryButton>
            <PrimaryButton
              type="submit"
              onClick={handleNavigateList}
              style={{ width: "50%", height: 60 }}
            >
              금액: {totalPrice}
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MenuDetail;
