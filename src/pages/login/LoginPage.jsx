import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import {
  EmailArea,
  LoginButton,
  LoginTopArea,
  LoginWrap,
  ServiceTextArea,
  SignUpButton,
} from "../../styles/join/joinpage";
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

const LoginPage = () => {
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
  // setMyPage{...로그인정보 담은 객체}
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
        setLoginError("");
        alert(`환영합니다, ${response.data.nickName}님! ヾ(•ω•)o`);
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
    <div>
      <LoginTopArea>
        <div>
          <a href="#">X</a>
        </div>
        <div>
          <p>로그인</p>
        </div>
      </LoginTopArea>
      <div className="loginMainWrap">
        <ServiceTextArea>
          <div>
            <span className="ca2sa">CA2SA</span>
          </div>
          <div className="serviceText">
            <span>서비스 이용을 위해 로그인을 해주세요</span>
          </div>
        </ServiceTextArea>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <LoginWrap>
            <EmailArea>
              <span>이메일</span>
              <input
                {...register("email")}
                type="text"
                placeholder="이메일을 입력해주세요."
              />
              <p style={{ color: "red" }}>{errors.email?.message}</p>
            </EmailArea>
            <div className="passwordArea">
              <span>비밀번호</span>
              <input
                {...register("upw")}
                type="password"
                placeholder="비밀번호를 입력해주세요."
              />
              <p style={{ color: "red" }}>{errors.upw?.message}</p>
            </div>
          </LoginWrap>
          {loginError && <p style={{ color: "red" }}>{loginError}</p>}
          <div className="loginSignUpWrap">
            <LoginButton>
              <button type="submit">로그인</button>
            </LoginButton>
          </div>

          <Link to="/join">
            <SignUpButton>회원가입</SignUpButton>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
