import { useState } from "react";

const UserPage = () => {
  const [userData, setUserData] = useState({});

  return (
    <div>
      <form>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <a href="#">뒤로가기</a>
          <div>마이페이지</div>
          <div>완료</div>
        </div>
        <div className="profileArea">
          <div>
            <img src="#"></img>
            <a href="#">프로필 이미지 변경</a>
          </div>
          <div>
            <p>닉네임</p>
            <input type="text" />
            <p>이메일</p>
            <input type="text" readOnly />
          </div>
        </div>
        <div>
          <label>
            <div className="infoBox_1">
              <div>
                <a href="#">공지사항</a>
              </div>
              <div>
                <a href="#">자주 묻는 질문</a>
              </div>
              <div>
                <a href="#">1:1 문의하기</a>
              </div>
            </div>
            <div className="infoBox_2">
              <div>
                <a href="#">서비스 이용약관</a>
              </div>
              <div>
                <a href="#">개인정보 처리 방침</a>
              </div>
              <div>
                <a href="#">마케팅 정보 수집 및 수신 동의</a>
              </div>
              <div>
                <a href="#">결제대행 서비스 이용약관</a>
              </div>
            </div>
            <div className="infoBox_3">
              <div>
                <a href="#">비밀번호 변경</a>
              </div>
              <div>
                <a href="#">로그아웃</a>
              </div>
              <div>
                <a href="#">회원탈퇴</a>
              </div>
            </div>
          </label>
        </div>
      </form>
    </div>
  );
};

export default UserPage;
