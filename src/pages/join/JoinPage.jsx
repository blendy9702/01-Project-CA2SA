import React, { useState } from "react";
import { Link } from "react-router-dom";

const JoinPage = () => {
  const [isCheckbox, setIsCheckbox] = useState(false);
  const [radioState, setRadioState] = useState({
    essential: false,
    choice: false,
  });

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
    <form>
      <div className="joinPageWrap">
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
              <input type="text" placeholder="닉네임을 입력해 주세요." />
            </div>
            <div className="joinPageEmail">
              <p>이메일</p>
              <input type="text" placeholder="이메일을 입력해 주세요." />
            </div>
            <div className="joinPagePassword">
              <p>비밀번호</p>
              <input type="text" placeholder="비밀번호를 입력해 주세요." />
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
                type="radio"
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
                type="radio"
                checked={radioState.choice}
                onChange={() => handleRadioChange("choice")}
              />
              <span>
                [선택]<a href="#">마케팅 정보 수집 및 수신 동의</a>
              </span>
            </div>
            <div className="joinPageMoveNext">
              <Link to="confirmform">다음</Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default JoinPage;
