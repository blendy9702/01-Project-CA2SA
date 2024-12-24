import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const ConfirmForm = () => {
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // 이메일 정보 가져오기
  React.useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state?.email);
    }
  }, [location.state]);

  // 인증코드 확인
  const handleVerifyCode = async () => {
    try {
      const res = await axios.post("/api/verify-code", {
        email: email,
        code: code,
      });

      if (res.data.success) {
        setSuccess(true);
        alert("인증이 완료되었습니다! 로그인 화면으로 이동합니다.");
        navigate("/login");
      } else {
        setError("인증 코드 틀립니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error(error);
      setError("서버와 통신 중 오류가 발생했습니다.");
    }
  };

  // 이메일 재전송
  const handleResendEmail = async () => {
    try {
      const res = await axios.post("/api/email-auth/send-code", {
        email: email,
      });
      if (res.data.success) {
        alert("인증 이메일이 재전송되었습니다!");
      } else {
        setError("이메일 재전송에 실패했습니다.");
      }
    } catch (error) {
      console.error(error);
      setError("서버와 통신 중 오류가 발생했습니다.");
    }
  };

  return (
    <form>
      <div className="confirmWrap">
        <div className="confirmTopArea">
          <div className="confirmBackOff">
            <Link to="/join">
              <span>◁</span>
            </Link>
          </div>
          <div className="confirmTopText">
            <span>회원가입</span>
          </div>
        </div>
        <div className="confirmCodeArea">
          <div className="confirmMainText">
            <p>인증번호를 입력해 주세요</p>
          </div>
          <div className="confirmEmailArea">
            <div className="confirmEmailSend">
              <p>{email}로</p>
              <p>인증코드를 전송하였습니다.</p>
            </div>
            <div className="EmailVerification">
              <p>인증코드 입력</p>
              <input
                type="text"
                placeholder="인증코드 6자리를 입력해 주세요."
                value={code}
                onChange={e => setCode(e.target.value)}
                maxLength={6}
              />
            </div>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div>
            <p>
              본인인증 이메일이 발송되었습니다! 확인 후 인증코드를 입력하세요.
            </p>
            <p>이메일이 발송되지 않았나요?</p>
            <div>
              <button type="button" onClick={handleResendEmail}>
                이메일 재전송
              </button>
            </div>
          </div>
          <div className="comfirmDone">
            <button type="button" onClick={handleVerifyCode}>
              완료
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ConfirmForm;
