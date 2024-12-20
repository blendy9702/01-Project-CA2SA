import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";

const initData = [
  {
    nickName: "홍길동",
    email: "yaho@gmail.com",
    upw: "1111",
    agree: 1,
  },
];

const loginSchema = yup.object({
  nickName: yup.string().required("닉네임을 입력하세요."),
  email: yup
    .string()
    .email("올바른 이메일이 아닙니다.")
    .required("이메일을 입력하세요...."),
  npw: yup
    .string()
    .min(4, "비밀번호는 최소 4자리입니다.")
    .max(12, "비밀번호는 최대 12자리입니다. ")
    .required("비밀번호는 필수 입니다."),
});

const JoinPage = () => {
  const {
    register,
    handleSubmit,
    formStat: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const [isCheckbox, setIsCheckbox] = useState(false);
  const [radioState, setRadioState] = useState({
    essential: false,
    choice: false,
  });

  const handleSubmitForm = data => {
    // axios로 보낼 데이터
    console.log(data);
  };

  const handleCheckboxChange = () => {
    const CheckedState = !isCheckbox;
    setIsCheckbox(CheckedState);
    if (CheckedState) {
      setRadioState({ essential: true, choice: true });
    } else {
      setRadioState({ essential: false, choice: false });
    }
  };

  const handleRadioChange = name => {
    setRadioState(prevStates => ({
      ...prevStates,
      [name]: !prevStates[name],
    }));
  };

  return (
    <div className="joinPageWrap">
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="joinPageTopArea">
          <div className="joinPageTopBackOff">
            <Link to="/login">
              <span>◁</span>
            </Link>
          </div>
          <div className="joinPageTopText">
            <span>회원가입</span>
          </div>
        </div>
        <div className="joinPageMainWrap">
          <div className="joinPageTextArea">
            <span>회원정보를 입력해주세요</span>
            <div className="joinPageNickName">
              <p>닉네임</p>
              <input
                type="text"
                {...register("nickName")}
                placeholder="닉네임을 입력해 주세요."
              />
            </div>
            <div className="joinPageEmail">
              <p>이메일</p>
              <input
                type="text"
                {...register("email")}
                placeholder="이메일을 입력해 주세요."
              />
            </div>
            <div className="joinPagePassword">
              <p>비밀번호</p>
              <input
                type="text"
                {...register("upw")}
                placeholder="비밀번호를 입력해 주세요."
              />
              <br />
              <input type="text" placeholder="비밀번호를 재입력해 주세요." />
            </div>
          </div>
          <div className="JoinPageCheckArea">
            <div className="serviceCheckBox">
              <input
                type="checkbox"
                checked={isCheckbox}
                onChange={handleCheckboxChange}
              />
              <span>서비스 이용약관 전체 동의</span>
            </div>
            <div className="essentialRadioBox">
              <input
                type="checkbox"
                checked={radioState.essential}
                onChange={() => handleRadioChange("essential")}
              />
              <span>
                [필수]<a href="#">이용약관</a> 및
                <a href="#"> 개인정보처리방침</a>
              </span>
            </div>
            <div className="choiceRadioBox">
              <input
                type="checkbox"
                checked={radioState.choice}
                onChange={() => handleRadioChange("choice")}
              />
              <span>
                [선택]<a href="#">마케팅 정보 수집 및 수신 동의</a>
              </span>
            </div>
            <div className="joinPageMoveNext">
              <button type="submit">다음</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default JoinPage;
