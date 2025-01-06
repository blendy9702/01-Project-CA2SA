import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import NavBar from "../../components/order/NavBar";
import { OrderContext } from "../../contexts/OrderContext";
import { PrimaryButton, SecondaryButton } from "../../styles/common";
import {
  ContainerDiv,
  CustomInputDiv,
  LayoutDiv,
  ThumImageDiv,
} from "../../styles/order/orderpage";

const MenuDetail = () => {
  // useParams
  const [searchParams, setSearchParams] = useSearchParams();
  const menuId = searchParams.get("menuId");
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  const userId = userData.resultData.userId;
  console.log(userId);
  //useNavigate
  const navigate = useNavigate();
  const location = useLocation();
  const locationData = location.state;

  const handleNavigateBack = () => {
    navigate(-1);
  };
  // order 내 카페 아이디가 같은가?
  const handleNavigateList = () => {
    // if (order.cafeId !== cafeInfo.cafeId) {
    //   alert("다른 카페입니다.");
    // }
    navigate(-1);
    setOrder({ ...order, cafeId: parseInt(cafeInfo.cafeId) });
  };
  const handleNavigatePaymet = () => {
    // if (order.cafeId !== cafeInfo.cafeId) {
    //   alert("다른 카페입니다.");
    // }
    navigate(`/order/payment?cafeId=${order.cafeId}`, {
      state: locationData,
    });
    setOrder({ ...order, cafeId: parseInt(cafeInfo.cafeId) });
  };

  // OrderContext
  const { order, setOrder, cartList, setCartList, addCartList } =
    useContext(OrderContext);

  //useState
  const [optionInfo, setOptionInfo] = useState({});
  const [optionList, setOptionList] = useState([]);
  const [cafeInfo, setCafeInfo] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [check, setCheck] = useState([]);
  // 체크된 옵션을 [{menuOptionId:""}]로 바꾸기 위한 useState;
  const [options, setOptions] = useState([]);
  useEffect(() => {
    console.log("체크 배열", check);
  }, [check]);
  // axios
  useEffect(() => {
    setCafeInfo(locationData);
    // console.log("상세 옵션 페이지 cafeInfo:", cafeInfo);
  }, [cafeInfo]);
  useEffect(() => {
    const getMenuOption = async data => {
      try {
        const res = await axios.get(`/api/menu/${data}`); ////api/cafe/menu/option
        const resultData = res.data.resultData;
        setOptionInfo(resultData);
        // console.log(`상세 옵션 통신 결과(optionInfo):`, resultData);
        // 옵션만 뽑아서 배열
        const optionInfoArr = [...resultData.detailList];
        console.log(optionInfoArr);
        setOptionList(optionInfoArr);
        setCheck(
          optionInfoArr.map((item, index) => {
            return index === 0 ? true : false;
          }),
        );
        setTotalPrice(resultData.price);
        setOptions([
          ...options,
          {
            menuOptionId: optionInfoArr[0].menuOptionId,
            menuOptionName: optionInfoArr[0].optionName,
          },
        ]);
        setOrder({ ...order, userId: userId });
      } catch (error) {
        console.log(`menuId: ${menuId}의 상세 옵션 통신 결과:`, error);
      }
    };
    getMenuOption(menuId);
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
      menuId: "",
      menuName: "",
      count: 1,
    },
  });
  //  menuId에 value값 넣기
  useEffect(() => {
    setValue("menuId", parseInt(menuId));
    setValue("menuName", optionInfo.menuName);
  }, [menuId, optionInfo.menuName, setValue]);

  // 금액 계산용 useState

  //  postorder에서 금액이 들어갈 경우
  useEffect(() => {
    setValue("price", totalPrice);
  }, [totalPrice, setValue]);

  //옵션 추가, 가격 추가

  useEffect(() => {
    console.log("options:", options);
  }, [options]);

  // 장바구니에 추가하기
  const handleSubmitForm = data => {
    // console.log("formData:", data);
    const fixedFormData = { ...data, options: options };
    // addCartList(fixedFormData);
    setOrder({ ...order, menuList: [...order.menuList, fixedFormData] });
  };
  // 체크 클릭했을 때
  const handleChangeCheck = (e, item, index) => {
    console.log("클릭 옵션의 체크 상태", check[index]);
    const option = {
      menuOptionName: item.optionName,
      menuOptionId: parseInt(e.target.value),
    };
    setCheck(prevCheck => {
      const newCheck = [...prevCheck];
      newCheck[index] = !prevCheck[index];
      return newCheck;
    });
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
    // 이 후 카테고리 선택지가 늘어나면, 버튼을 누를 때 index에 따라서?
    if (e.target.checked === true) {
      setValue(`options[0]`, {
        menuOptionId: e.target.value,
      });
    }
  };
  useEffect(() => {
    console.log("order:", order);
  }, [order]);

  return (
    <div style={{ position: "relative", paddingBottom: 70 }}>
      <NavBar
        onClick={handleNavigateBack}
        icon={"back"}
        title={cafeInfo ? cafeInfo.cafeName : "정보를 불러오는 중..."}
      />
      <ThumImageDiv height={375}>
        <img
          src={
            optionInfo?.menuPic ? optionInfo.menuPic : "/images/order/cat2.jpg"
          }
          alt="메뉴 사진"
        />
      </ThumImageDiv>
      {/* 메뉴 정보 */}
      <LayoutDiv borderBottom={5}>
        <ContainerDiv className="menuInfo">
          <h3 className="menuName">{optionInfo?.menuName || "로딩중"}</h3>
          <p className="comment">{optionInfo.comment}</p>
          <p className="menu-price">
            {optionInfo.price
              ? optionInfo.price.toLocaleString()
              : "정보를 불러오는 중"}{" "}
            원
          </p>
        </ContainerDiv>
      </LayoutDiv>
      {/* 주문 정보 입력 */}
      <LayoutDiv>
        <ContainerDiv>
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            {/* 선택 옵션 */}
            {optionList.map((item, index) => {
              return (
                <CustomInputDiv className="optionCheck" key={index}>
                  <input
                    type="checkbox"
                    id={item.menuOptionId}
                    value={item.menuOptionId}
                    {...register("options")}
                    onChange={e => handleChangeCheck(e, item, index)}
                    checked={check[index] ? true : false}
                  />
                  <label htmlFor={item.menuOptionId}>{item.optionName}</label>
                  <span className="optionPrice">+{item.addPrice}원</span>
                </CustomInputDiv>
              );
            })}
            <div className="button-box">
              <SecondaryButton type="submit" onClick={handleNavigatePaymet}>
                바로 주문
              </SecondaryButton>
              <PrimaryButton type="submit" onClick={handleNavigateList}>
                {totalPrice.toLocaleString()} 원 담기
              </PrimaryButton>
            </div>
          </form>
        </ContainerDiv>
      </LayoutDiv>
    </div>
  );
};

export default MenuDetail;
