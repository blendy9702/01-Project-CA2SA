import React, { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";

const loginSchema = yup.object({
  nickName: yup
    .string()
    .min(3, "3글자 이상 입력하세요")
    .required("닉네임을 입력하세요."),
  email: yup
    .string()
    .email("올바른 이메일이 아닙니다.")
    .required("이메일을 입력하세요."),
  upw: yup
    .string()
    .min(4, "비밀번호는 최소 4자리입니다.")
    .max(12, "비밀번호는 최대 12자리입니다. ")
    .required("비밀번호는 필수 입니다."),
});

const JoinPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: { nickName: "", email: "", upw: "", agree: "1" },
    mode: "onChange",
  });

  const [formValid, setFormValid] = useState(false);
  const [isCheckbox, setIsCheckbox] = useState(false);
  const [radioState, setRadioState] = useState({
    essential: false,
    choice: false,
  });
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate({
    nickName: "",
    email: "",
    upw: "",
    agree: "1",
  });

  // 패스워드 일치 확인
  const email = watch("email");
  const password = watch("upw");
  const passwordCheck = watch("passwordCheck");

  // 이메일 중복 확인
  const handleEmailValidation = async email => {
    try {
      const res = await axios.get("/api/user/check-email", {
        params: { email },
      });
      console.log("서버 응답 데이터:", res.data);
      if (res.data?.resultData === 0) {
        setIsEmailValid(false);
        setEmailError("이미 사용 중인 이메일입니다.");
      } else {
        setIsEmailValid(true);
        setEmailError("사용 가능한 이메일입니다.");
      }
    } catch (error) {
      console.error("이메일 확인 오류:", error.response || error.message);
      setIsEmailValid(false);
      setEmailError("이메일 확인 중 오류가 발생했습니다.");
    }
  };

  const handleSubmitForm = async data => {
    try {
      // 인증코드 전송 API
      console.log("보내는 데이터:", { email: data.email });
      const email = data.email;
      await axios.post("/api/email-auth/send-code", {
        email,
      });
      alert("인증코드가 발송되었습니다.");
      // 인증 코드 확인 페이지로 이동
      navigate("/join/confirmform", { state: data });
    } catch (error) {
      console.error(
        "API 요청 에러:",
        error.response ? error.response.data : error.message,
      );
      alert("인증코드 발송에 실패했습니다. 다시 시도해주세요.");
    }
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

  useEffect(() => {
    const passwordsMatch = password === passwordCheck;
    setFormValid(isValid && radioState.essential && passwordsMatch);
  }, [isValid, radioState.essential, password, passwordCheck]);

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
                name="nickName"
                type="text"
                {...register("nickName")}
                placeholder="닉네임을 입력해 주세요."
              />
              <p style={{ color: "red" }}>{errors.nickName?.message}</p>
            </div>
            <div className="joinPageEmail">
              <p>이메일</p>
              <input
                name="email"
                type="text"
                {...register("email")}
                placeholder="이메일을 입력해 주세요."
              />
              <p style={{ color: "red" }}>{errors.email?.message}</p>
              <p style={{ color: "red" }}>{emailError}</p>
            </div>
            <button
              type="button"
              onClick={() => handleEmailValidation(email)}
              disabled={!email}
            >
              중복 확인
            </button>
            <div className="joinPagePassword">
              <p>비밀번호</p>
              <input
                name="password"
                type="password"
                {...register("upw")}
                placeholder="비밀번호를 입력해 주세요."
              />
              <p style={{ color: "red" }}>{errors.upw?.message}</p>
              <input
                name="passwordCheck"
                type="password"
                {...register("passwordCheck")}
                placeholder="비밀번호를 재입력해 주세요."
              />
              {password !== passwordCheck && (
                <p style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</p>
              )}
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
              <button type="submit" disabled={!formValid}>
                다음
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default JoinPage;
