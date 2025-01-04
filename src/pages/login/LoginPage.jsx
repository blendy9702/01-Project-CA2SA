import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import {
  EmailArea,
  JustBox,
  LoginButton,
  LoginTopArea,
  LoginWrap,
  PasswordArea,
  ServiceTextArea,
  SignUpButton,
} from "../../styles/join/loginpage";
import { UserPageContext } from "../../contexts/UserPageContext";

const loginSchema = yup.object({
  email: yup
    .string()
    .email("유효한 이메일을 입력하세요.")
    .required("이메일은 필수 입니다."),
  upw: yup
    .string()
    .min(4, "비밀번호는 최소 4자리입니다.")
    .max(12, "비밀번호는 최대 12자리입니다.")
    .required("비밀번호는 필수 입니다."),
});

const LoginPage = ({ onLoginSuccess }) => {
  const handleLogin = () => {
    const userData = {
      userId: "",
      nickName: "",
      email: "",
    };
    onLoginSuccess(userData);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: { email: "", upw: "" },
    mode: "onChange",
  });
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const { myPage, setMyPage } = useContext(UserPageContext);

  // 로그인 요청 처리
  const handleSubmitForm = async data => {
    try {
      const response = await axios.post("/api/user/sign-in", {
        email: data.email,
        upw: data.upw,
      });
      // 로그인
      console.log("Response Data: ", response.data);
      if (response.data && response.data.resultMessage === "로그인 성공") {
        setMyPage(response.data.resultData);
        setLoginError("");
        alert(`환영합니다, ${response.data.resultData.nickName}님! ヾ(•ω•)o`);
        navigate("/");
        // 세션 스토리지
        sessionStorage.setItem("userData", JSON.stringify(response.data));
      } else {
        setLoginError(
          response.data.message || "이메일과 비밀번호가 일치하지 않습니다.",
        );
      }
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data.message) {
        setLoginError(error.response.data.message);
      } else {
        setLoginError("서버와의 연결에 실패했습니다. 다시 시도해주세요.");
      }
    }
  };

  return (
    <div
      style={{
        margin: "20px",
      }}
    >
      <LoginTopArea>
        <div>
          <p>로그인</p>
        </div>
      </LoginTopArea>
      <div className="loginMainWrap">
        <ServiceTextArea>
          <div>
            <img
              src="/images/ca2saLogo.png"
              style={{
                width: "115px",
              }}
            />
          </div>
          <div className="serviceText">
            <span>서비스 이용을 위해 로그인을 해주세요</span>
          </div>
        </ServiceTextArea>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <LoginWrap>
            <EmailArea>
              <p>이메일</p>
              <input
                {...register("email")}
                type="text"
                placeholder="이메일을 입력해주세요."
                style={{ fontSize: "16px", fontWeight: "300" }}
              />
              <p style={{ color: "var(--error-clolr)", fontSize: "14px" }}>
                {errors.email?.message}
              </p>
            </EmailArea>
            <PasswordArea>
              <p>비밀번호</p>
              <input
                {...register("upw")}
                type="password"
                placeholder="비밀번호를 입력해주세요."
                style={{ fontSize: "16px", fontWeight: "300" }}
              />
              <p style={{ color: "var(--error-clolr)", fontSize: "14px" }}>
                {errors.upw?.message}
              </p>
            </PasswordArea>
          </LoginWrap>
          {loginError && (
            <p style={{ color: "var(--error-clolr)", fontSize: "14px" }}>
              {loginError}
            </p>
          )}
          <div className="loginSignUpWrap">
            <LoginButton>
              <button type="submit" onClick={handleLogin}>
                로그인
              </button>
            </LoginButton>
          </div>

          <Link to="/join">
            <SignUpButton>회원가입</SignUpButton>
          </Link>
          <JustBox></JustBox>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
