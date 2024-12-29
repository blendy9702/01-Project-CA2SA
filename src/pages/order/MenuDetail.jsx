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
  //useNavigate
  const navigate = useNavigate();
  const location = useLocation();
  const locationData = location.state;
  const cafeId = locationData[0];
  const cafeInfo = locationData[1];
  const fromPage = locationData[2].from;
  const menuInfo = locationData[3];
  const menuId = menuInfo.menuId;
  useEffect(() => {
    console.log("메뉴 옵션 페이지 location:", locationData);
  }, [locationData]);
  const handleNavigateBack = () => {
    navigate(fromPage, {
      state: [cafeId, cafeInfo, menuInfo],
    });
  };
  const handleNavigateList = () => {
    navigate(`/order/menu?cafeId=${cafeId.cafeId}`, {
      state: [cafeId, cafeInfo, menuInfo],
    });
  };
  const handleNavigatePaymet = () => {
    navigate(`/order/payment?cafeName=${cafeInfo.cafeName}`, {
      state: [cafeId, cafeInfo, { from: `/menu/detail?menuId=${menuId}` }],
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
        console.log(`menuId: ${menuId}의 상세 옵션 통신 결과:`, resultData);
        setOptionList(resultData);
      } catch (error) {
        console.log(`menuId: ${menuId}의 상세 옵션 통신 결과:`, error);
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
      menuId: "",
      menuName: menuInfo.menuName,
      count: 1,
    },
  });
  //  menuId에 value값 넣기
  useEffect(() => {
    setValue("menuId", menuId);
  }, [cafeId, menuId, setValue]);

  // 금액 계산용 useState
  const [totalPrice, setTotalPrice] = useState(menuInfo.price);
  //  postorder에서 금액이 들어갈 경우
  useEffect(() => {
    setValue("price", totalPrice);
  }, [totalPrice, setValue]);

  // 체크된 옵션을 [{menuOptionId:""}]로 바꾸기 위한 useState;
  const [options, setOptions] = useState([]);
  //옵션 추가, 가격 추가
  const handleChange = (e, item) => {
    // console.log("e.target", e.target);
    const option = {
      menuOptionName: e.target.getAttribute("id"),
      menuOptionId: parseInt(e.target.value),
    };
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
    // console.log("formData:", data);
    const fixedFormData = { ...data, options: options };
    addCartList(fixedFormData);
  };
  return (
    <div style={{ position: "relative", paddingBottom: 30 }}>
      <NavBar
        onClick={handleNavigateBack}
        icon={"back"}
        title={cafeInfo.cafeName}
      />
      <ThumImageDiv height={375}>
        <img
          src={
            menuInfo.menuPic
              ? `/CA2SA/image/cafe/2/${menuInfo.menuPic}`
              : "/images/order/cat2.jpg"
          }
          alt="메뉴 사진"
        />
      </ThumImageDiv>
      {/* 메뉴 정보 */}
      <LayoutDiv borderBottom={5}>
        <ContainerDiv className="menuInfo">
          <h4 className="menuName">{menuInfo.menuName}</h4>
          <p className="comment">{menuInfo.comment}</p>
          <p className="menu-price">{menuInfo.price.toLocaleString()} 원</p>
        </ContainerDiv>
      </LayoutDiv>
      {/* 주문 정보 입력 */}
      <LayoutDiv>
        <ContainerDiv>
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            {/* 숨김 정보 */}
            <div style={{ display: "none" }}>
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
                <CustomInputDiv className="optionCheck" key={index}>
                  <input
                    type="checkbox"
                    id={item.optionName}
                    value={item.menuOptionId}
                    {...register("options")}
                    onChange={e => {
                      // 이 후 카테고리 선택지가 늘어나면, 버튼을 누를 때 index에 따라서?
                      if (e.target.checked === true) {
                        setValue(`options[0]`, {
                          menuOptionId: e.target.value,
                        });
                      }
                      handleChange(e, item);
                    }}
                  />
                  <label htmlFor={item.optionName}>{item.optionName}</label>
                  <span className="optionPrice">+{item.addPrice}원</span>
                </CustomInputDiv>
              );
            })}
            <div className="button-box">
              <SecondaryButton type="submit" onClick={handleNavigatePaymet}>
                바로주문
              </SecondaryButton>
              <PrimaryButton type="submit" onClick={handleNavigateList}>
                금액: {totalPrice}
              </PrimaryButton>
            </div>
          </form>
        </ContainerDiv>
      </LayoutDiv>
    </div>
  );
};

export default MenuDetail;
