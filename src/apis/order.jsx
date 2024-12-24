// 임시 데이터
// postUserSignin의 응답으로 온 데이터
export const resPostLoginData = {
  resultMessage: "로그인 성공",
  resultData: {
    userId: 1,
    nickName: "고사리",
    email: "aa@aa.aa",
  },
};
// 카페 정보 불러온 결과
export const getCafeInfo = {
  resultMessage: "1",
  resultData: {
    cafeId: 1, // 임시 부여. 현재 구글 시트에 없음
    cafeName: "컴포즈 동성로점",
    location: "대구 중구 달구벌대로 2123 1층 (우)41943",
    tel: "0532596648",
    cafePic: "String",
    openTime: "09:00",
    closeTime: "22:00",
  },
};
//주문 보냈을 때 올 데이터
export const resultPostData = { resultMessage: "주문 성공", resultData: 1 };
// 주문 했던 정보 가져오기
export const getOderInfo = {
  resultMessage: "1",
  resultData: {
    location: "String",
    cafeName: "String",
    orderId: "long",
    pickUpTime: "String",
    count: "int",
    menuOptionName: "String",
    createdAt: "time",
  },
};

//임시 카페 메뉴 목록
export const getCafeMenuList = [
  {
    menuId: 1,
    menuName: "아메리카노",
    price: "1500",
    comment: "맛있다1",
    menuPic: "#",
  },
  {
    menuId: 2,
    menuName: "아메리카노2",
    price: "1500",
    comment: "맛있다2",
    menuPic: "#",
  },
  {
    menuId: 3,
    menuName: "아메리카노3",
    price: "1500",
    comment: "맛있다3",
    menuPic: "#",
  },
  {
    menuId: 4,
    menuName: "아메리카노4",
    price: "1500",
    comment: "맛있다4",
    menuPic: "#",
  },
];

// 카페 정보 불러오기
const ResCafegetCafeInfo = {
  resultMessage: "카페 정보 조회 완료",
  resultData: {
    cafeName: "string",
    location: "string",
    tel: "string",
    cafePic: "string",
    openTime: "string",
    closeTime: "string",
  },
};

/// 메뉴 상세 정보 불러오기 결과
export const getMenuDetailInfo = {
  resultMessage: "메뉴 상세정보 출력 완료",
  resultData: {
    menuName: "아메리카노",
    price: 1500,
    comment: "맛있는 아메리카노",
    menuPic: "#",
    options: [
      {
        optionName: "HOT",
        menuOptionId: 1,
        addPrice: 2000,
        required: 0,
        menuName: "string",
      },
      {
        optionName: "ICE",
        menuOptionId: 2,
        addPrice: 1000,
        required: 0,
        menuName: "string",
      },
      {
        optionName: "샷추가",
        menuOptionId: 3,
        addPrice: 500,
        required: 0,
        menuName: "string",
      },
    ],
  },
};
