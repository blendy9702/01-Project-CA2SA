import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";

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

  // 로그인 요청 처리
  const handleSubmitForm = async data => {
    try {
      const res = await axios.post("/api/user/sing-in", {
        email: data.email,
        upw: data.upw,
      });

      // 로그인
      if (res.data && res.data.success) {
        setLoginError("");
        alert(`환영합니다, ${res.data.nickName}님! ヾ(•ω•)o`);
      } else {
        setLoginError("로그인에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error(error);
      if (error.res && error.res.data.message) {
        setLoginError(error.res.data.message);
      } else {
        setLoginError("서버와의 연결에 실패했습니다. 다시 시도해주세요.");
      }
    }
  };

  return (
    <div>
      <div className="loginTopArea">
        <div>
          <a href="#">X</a>
        </div>
        <div>
          <p>로그인</p>
        </div>
      </div>
      <div className="loginMainWrap">
        <div className="serviceTextArea">
          <div className="ca2sa">
            <span>CA2SA</span>
          </div>
          <div className="serviceText">
            <span>서비스 이용을 위해 로그인을 해주세요</span>
          </div>
        </div>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <div className="loginWrap">
            <div className="emailArea">
              <span>이메일</span>
              <input
                {...register("email")}
                type="text"
                placeholder="이메일을 입력해주세요."
              />
              <p style={{ color: "red" }}>{errors.email?.message}</p>
            </div>
            <div className="passwordArea">
              <span>비밀번호</span>
              <input
                {...register("upw")}
                type="password"
                placeholder="비밀번호를 입력해주세요."
              />
              <p style={{ color: "red" }}>{errors.upw?.message}</p>
            </div>
          </div>
          {loginError && <p style={{ color: "red" }}>{loginError}</p>}
          <div className="loginSignUpWrap">
            <div className="loginButton">
              <button type="submit">로그인</button>
            </div>
          </div>
        </form>
        <div className="SingUpButton">
          <Link to="/join">
            <button>회원가입</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
