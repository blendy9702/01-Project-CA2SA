import React, { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import {
  ChoiceRadioBox,
  EssentialRadioBox,
  JoinPageCheckArea,
  JoinPageEmail,
  JoinPageMainWrap,
  JoinPageMoveNext,
  JoinPageNickName,
  JoinPagePassword,
  JoinPageTextArea,
  JoinPageTopArea,
  JoinPageTopBackOff,
  JoinPageTopText,
  JoinPageWrap,
  ServiceCheckBox,
} from "../../styles/join/joinpage";
import { NavBarDiv } from "../../styles/order/orderpage";
import { IoIosArrowBack } from "react-icons/io";
import JoinPageSpinner from "./JoinPageSpinner";

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
  passwordCheck: yup
    .string()
    .oneOf([yup.ref("upw"), null], "패스워드가 일치하지 않습니다."),
});

const JoinPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: { nickName: "", email: "", upw: "" },
    mode: "onChange",
  });

  const [formValid, setFormValid] = useState(false);
  const [isCheckbox, setIsCheckbox] = useState(false);
  const [radioState, setRadioState] = useState({
    essential: false,
    choice: false,
  });
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isEmailChecked, setIsEmailChecked] = useState(false);
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate({
    nickName: "",
    email: "",
    upw: "",
  });
  const [loading, setLoding] = useState(false);

  // 패스워드 일치 확인
  const email = watch("email");

  // 이메일 중복 확인
  const handleEmailValidation = async email => {
    try {
      const res = await axios.get("/api/user/check-email", {
        params: { email },
      });
      if (res.data?.resultData === 0) {
        setIsEmailValid(false);
        setEmailError("이미 사용 중인 이메일입니다.");
        setIsEmailChecked(false);
      } else {
        setIsEmailValid(true);
        setEmailError("사용 가능한 이메일입니다.");
        setIsEmailChecked(true);
      }
    } catch (error) {
      console.error("이메일 확인 오류:", error.response || error.message);
      setIsEmailValid(false);
      setEmailError("이메일 확인 중 오류가 발생했습니다.");
      setIsEmailChecked(false);
    }
  };

  const handleSubmitForm = async data => {
    setLoding(true);
    try {
      // 인증코드 전송 API
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
    } finally {
      setLoding(false);
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

  useEffect(() => {
    if (radioState.essential && radioState.choice) {
      setIsCheckbox(true);
    } else {
      setIsCheckbox(false);
    }
  }, [radioState]);

  const handleRadioChange = name => {
    setRadioState(prevStates => ({
      ...prevStates,
      [name]: !prevStates[name],
    }));
  };

  useEffect(() => {
    setFormValid(isValid && radioState.essential && isEmailChecked);
  }, [isValid, radioState.essential, isEmailChecked]);

  return (
    <JoinPageWrap>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <JoinPageTopArea>
          <JoinPageTopBackOff>
            <Link to="/login">
              <IoIosArrowBack
                style={{
                  fontSize: "24px",
                }}
              />
            </Link>
          </JoinPageTopBackOff>
          <JoinPageTopText>
            <span>회원가입</span>
          </JoinPageTopText>
        </JoinPageTopArea>

        <JoinPageMainWrap>
          <JoinPageTextArea>
            <span>회원정보를 입력해주세요</span>
            <JoinPageNickName style={{ marginBottom: "20px" }}>
              <p>닉네임</p>
              <input
                name="nickName"
                type="text"
                {...register("nickName")}
                placeholder="닉네임을 입력해 주세요."
              />
              <p style={{ color: "var(--error-clolr)", marginTop: "5px" }}>
                {errors.nickName?.message}
              </p>
            </JoinPageNickName>
            <JoinPageEmail style={{ marginBottom: "20px" }}>
              <p>이메일</p>
              <input
                name="email"
                type="text"
                {...register("email")}
                placeholder="이메일을 입력해 주세요."
              />
              <div
                style={{
                  color: "var(--error-clolr)",
                  fontSize: "14px",
                  marginTop: "5px",
                }}
              >
                {errors.email?.message}
              </div>
              <div
                style={{
                  color: "var(--error-clolr)",
                  fontSize: "14px",
                  marginTop: "5px",
                }}
              >
                {emailError}
              </div>
              <button
                type="button"
                onClick={() => handleEmailValidation(email)}
                disabled={!email}
              >
                중복확인
              </button>
            </JoinPageEmail>
            <JoinPagePassword>
              <p>비밀번호</p>
              <input
                name="password"
                type="password"
                {...register("upw")}
                placeholder="비밀번호를 입력해 주세요."
              />
              <div
                style={{
                  color: "var(--error-clolr)",
                  fontSize: "14px",
                  marginTop: "5px",
                }}
              >
                {errors.upw?.message}
              </div>
              <input
                name="passwordCheck"
                type="password"
                {...register("passwordCheck")}
                placeholder="비밀번호를 재입력해 주세요."
                style={{ marginTop: "20px" }}
              />
              <div
                style={{
                  color: "var(--error-clolr)",
                  fontSize: "14px",
                  marginTop: "5px",
                }}
              >
                {errors.passwordCheck?.message}
              </div>
            </JoinPagePassword>
          </JoinPageTextArea>
          <JoinPageCheckArea>
            <ServiceCheckBox>
              <input
                type="checkbox"
                checked={isCheckbox}
                onChange={handleCheckboxChange}
              />
              <span>서비스 이용약관 전체 동의</span>
            </ServiceCheckBox>
            <div
              style={{
                width: "100%",
                height: "1px",
                background: "var(--color-gray-100)",
                margin: "20px 0",
              }}
            ></div>
            <EssentialRadioBox>
              <input
                type="checkbox"
                checked={radioState.essential}
                onChange={() => handleRadioChange("essential")}
              />
              <span>
                [필수]
                <Link
                  to="/terms/service"
                  style={{
                    textDecorationLine: "underline",
                  }}
                >
                  이용약관
                </Link>{" "}
                및
                <Link
                  to="/terms/privacy"
                  style={{
                    textDecorationLine: "underline",
                  }}
                >
                  {" "}
                  개인정보처리방침
                </Link>
              </span>
            </EssentialRadioBox>
            <ChoiceRadioBox>
              <input
                type="checkbox"
                checked={radioState.choice}
                onChange={() => handleRadioChange("choice")}
              />
              <span>
                [선택]{" "}
                <Link
                  to="/terms/marketing"
                  href="#"
                  style={{
                    textDecorationLine: "underline",
                  }}
                >
                  마케팅 정보 수집 및 수신 동의
                </Link>
              </span>
            </ChoiceRadioBox>
            <JoinPageMoveNext>
              <button type="submit" disabled={!formValid}>
                다음
              </button>
            </JoinPageMoveNext>
          </JoinPageCheckArea>
        </JoinPageMainWrap>
      </form>
      {loading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "8px",
              textAlign: "center",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <JoinPageSpinner loading={true} />
          </div>
        </div>
      )}
      <div></div>
    </JoinPageWrap>
  );
};

export default JoinPage;
