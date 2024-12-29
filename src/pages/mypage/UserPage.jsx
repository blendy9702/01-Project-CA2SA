import { useContext, useEffect, useState } from "react";
import { UserPageContext } from "../../contexts/UserPageContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserPage = () => {
  const { myPage, setMyPage } = useContext(UserPageContext);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const [upw, setUpw] = useState();

  const updateNickname = async () => {
    try {
      const res = await axios.put("/api/user/info", {
        userId: userData.userId,
        upw: upw,
        nickName: userData.nickName,
      });
      console.log("서버 응답 데이터:", res.data);

      if (res.data.resultMessage === "1") {
        alert("닉네임이 변경되었습니다.");
        // 세션 스토리지 업데이트
        sessionStorage.setItem(
          "userData",
          JSON.stringify({
            ...userData,
            nickName: userData.nickName,
          }),
        );
      } else {
        alert(res.data.resultMessage || "닉네임 변경에 실패했습니다.");
      }
    } catch (error) {
      console.log("닉네임 변경 오류 : ", error);
      console.error("닉네임 변경 오류:", error.response?.data || error.message);
      alert("닉네임 변경 중 문제가 발생했습니다. 다시 시도해주세요.");
    }
  };

  const userDelete = async () => {
    try {
      const res = await axios.delete("/api/user", {
        params: { userId: userData.userId },
      });

      if (
        res.data.resultMessage === "회원정보 삭제 완료" &&
        res.data.resultData === 1
      ) {
        alert("회원탈퇴가 완료되었습니다.");
        handleLogout();
      } else {
        alert("회원탈퇴에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("회원탈퇴 오류:", error);
      alert("회원탈퇴 중 문제가 발생했습니다. 다시 시도해주세요.");
    }
  };

  const handleLogout = () => {
    // 세션 스토리지와 컨텍스트 초기화
    sessionStorage.clear();
    setMyPage({});
    alert("로그아웃합니다..");
    navigate("/login");
  };

  useEffect(() => {
    const storedData = sessionStorage.getItem("userData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setUserData(parsedData.resultData || {});
    }
  }, []);

  return (
    <div>
      <form>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <a href="#">뒤로가기</a>
          <div>마이페이지</div>
          <button type="button" onClick={updateNickname}>
            완료
          </button>
        </div>
        <div className="profileArea">
          <div>
            <img src="#"></img>
            <a href="#">프로필 이미지 변경</a>
          </div>
          <div>
            <p>이메일</p>
            <input type="text" value={userData.email} readOnly />
            <p>닉네임</p>
            <input
              type="text"
              value={userData.nickName}
              onChange={e =>
                setUserData(prev => ({ ...prev, nickName: e.target.value }))
              }
              placeholder="닉네임을 입력하세요"
            />
            <p>비밀번호</p>
            <input
              type="password"
              value={upw}
              onChange={e => setUpw(e.target.value)}
              placeholder="닉네임 변경에 비밀번호가 필요합니다."
            />
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
                <button type="button" onClick={handleLogout}>
                  로그아웃
                </button>
              </div>
              <div>
                <button type="button" onClick={userDelete}>
                  회원탈퇴
                </button>
              </div>
            </div>
          </label>
        </div>
      </form>
    </div>
  );
};

export default UserPage;
