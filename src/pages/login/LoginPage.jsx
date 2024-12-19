import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState();
  const [isLogin, setIsLogin] = useState();

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
        <div className="loginWrap">
          <div className="emailArea">
            <span>이메일</span>
            <input type="text" placeholder="이메일을 입력해주세요." />
          </div>
          <div className="passwordArea">
            <span>비밀번호</span>
            <input type="text" placeholder="비밀번호를 입력해주세요." />
          </div>
        </div>
      </div>
      <div className="loginSignUpWrap">
        <div className="loginButton">
          <button type="button">로그인</button>
        </div>
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
