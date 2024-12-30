import { Link } from "react-router-dom";

const ConfirmForm = () => {
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const [authTimer, setAuthTimer] = useState(300);
  const [resendTimer, setResendTimer] = useState(0);
  const [Resend, setResend] = useState(true);
  const location = useLocation();
  console.log("넘어오는 데이터들 : ", location.state);
  const navigate = useNavigate();
  // context

  // 이메일 정보 가져오기
  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state?.email);
    }
  }, [location.state]);

  // 인증코드 확인
  const handleVerifyCode = async () => {
    try {
      const res = await axios.post("/api/email-auth/verify-code", {
        email: email,
        code: code,
      });

      console.log("서버 응답:", res.data);

      if (res.data.resultData) {
        const regData = {
          nickName: location.state.nickName,
          email: location.state.email,
          upw: location.state.upw,
          agree: location.state.agree,
        };
        console.log("전송되는 데이터:", regData);

        // 회원가입 API 호출
        const regSignUp = await axios.post("/api/user/sign-up", regData);
        console.log("뭐가 올까요?", regSignUp);
        console.log("회원가입 응답 데이터:", regSignUp.data);

        if (regSignUp.data.resultData === 1) {
          setSuccess(true);
          alert("회원가입이 완료되었습니다! 로그인 화면으로 이동합니다.");
          navigate("/login");
        } else {
          setError("회원가입에 실패했습니다. 다시 시도해주세요.");
        }
      } else {
        setError("인증 코드가 틀립니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error(error);
      setError("서버와 통신 중 오류가 발생했습니다.");
    }
  };

  // 이메일 재전송
  const handleResendEmail = async () => {
    if (!Resend) return;

    try {
      const res = await axios.post("/api/email-auth/send-code", {
        email: email,
      });
      console.log("서버 응답 데이터:", res.data);
      if (res.data.resultData === true) {
        alert("인증 이메일이 재전송되었습니다!");
        setResend(false);
        setResendTimer(5);
        setAuthTimer(300);
      } else {
        setError("이메일 재전송에 실패했습니다.");
      }
    } catch (error) {
      console.error(error);
      setError("서버와 통신 중 오류가 발생했습니다.");
    }
  };

  //인증 타이머 처리
  useEffect(() => {
    let interval;
    if (authTimer > 0) {
      interval = setInterval(() => {
        setAuthTimer(prevAuthTimer => prevAuthTimer - 1);
      }, 1000);
    } else if (authTimer === 0) {
      setError("인증 시간이 만료되었습니다. 다시 시도해 주세요.");
    }
    return () => clearInterval(interval);
  }, [authTimer]);

  // 재전송 타이머 처리
  useEffect(() => {
    let interval;
    if (resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer(prevResendTimer => prevResendTimer - 1);
      }, 1000);
    } else if (resendTimer === 0) {
      setResend(true);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [resendTimer]);

  const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <form>
      <ConfirmWrap>
        <ConfirmTopArea>
          <ConfirmBackOff>
            <Link to="/join">
              <IoIosArrowBack
                style={{
                  fontSize: "20px",
                  marginTop: "10px",
                  marginLeft: "10px",
                }}
              />
            </Link>
            <ConfirmTopText>
              <span>회원가입</span>
            </ConfirmTopText>
          </ConfirmBackOff>
        </ConfirmTopArea>
        <ConfirmCodeArea>
          <ConfirmMainText>
            <p>인증번호를 입력해 주세요</p>
          </div>
          <div className="confirmEmailArea">
            <div className="confirmEmailSend">
              <p>ca2sa@email.com로</p>
              <p>인증코드를 전송하였습니다.</p>
            </div>
            <div className="EmailVerification">
              <p>인증코드 입력</p>
              <input type="text" placeholder="인증코드를 입력해 주세요." />
            </div>
          </div>
          <div>
            <p>
              본인인증 이메일이 발송되었습니다! 확인 후 인증코드를 입력하세요.
            </p>
            <p>이메일이 발송되지 않았나요?</p>
            <div>
              <a href="#">이메일 재전송</a>
            </div>
          </div>
          <div className="comfirmDone">
            <Link to="/login">완료</Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ConfirmForm;
