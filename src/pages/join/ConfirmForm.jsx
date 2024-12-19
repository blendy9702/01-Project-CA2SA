import { Link } from "react-router-dom";

const ConfirmForm = () => {
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
              <p>ca2sa@email.com로</p>
              <p>인증코드를 전송하였습니다.</p>
            </div>
            <div className="EmailVerification">
              <p>인증코드 입력</p>
              <input type="text" placeholder="인증코드를 입력해 주세요." />
            </div>
          </div>
          <div>
            <span>
              본인인증 이메일이 발송되었습니다. 확인 후 회원가입을 완료해주시기
              바랍니다. 이메일이 발송되지 않았나요?
            </span>
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
