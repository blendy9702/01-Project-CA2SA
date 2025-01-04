import { useContext, useEffect, useState } from "react";
import { UserPageContext } from "../../contexts/UserPageContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  InfoBox_1,
  InfoBox_2,
  InfoBox_3,
  InputFocus,
  MyPageDiv,
  NicknameButton,
  ProfileArea,
  ProfileImg,
  ProfileInfoArea,
} from "../../styles/join/userpage";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AiFillCamera, AiFillNotification } from "react-icons/ai";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";

const UserPage = () => {
  const [updataNick, setUpdataNick] = useState(false);
  const { myPage, setMyPage } = useContext(UserPageContext);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const [upw, setUpw] = useState();

  const updateNickname = async () => {
    try {
      const res = await axios.put("/api/user/info", {
        userId: userData.userId,
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
    const userPassword = prompt("회원탈퇴를 위해 비밀번호를 입력하세요.");
    try {
      const res = await axios.delete("/api/user", {
        data: { userId: userData.userId, upw: userPassword },
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
  // 이전 페이지로 가기
  const handleGoBack = () => {
    navigate(-1);
  };

  const handleLogout = () => {
    // 세션 스토리지와 컨텍스트 초기화
    sessionStorage.clear();
    setMyPage({});
    alert("로그아웃합니다.");
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
    <div
      style={{
        margin: "0 20px",
      }}
    >
      <form>
        <MyPageDiv>
          <Link
            onClick={e => {
              e.preventDefault();
              handleGoBack();
            }}
          >
            <IoIosArrowBack
              style={{
                fontSize: "20px",
              }}
            />
          </Link>
          <span>마이페이지</span>
          <button type="button" onClick={updateNickname}>
            완료
          </button>
        </MyPageDiv>
        <ProfileArea>
          <ProfileImg>
            <div>
              <div>
                <img src="/images/order/umjun.jpg" alt="Profile" />
              </div>
              <a href="#">
                <AiFillCamera />
              </a>
            </div>
          </ProfileImg>
          <ProfileInfoArea>
            <p>닉네임</p>
            <InputFocus
              type="text"
              value={userData.nickName}
              onChange={e =>
                setUserData(prev => ({ ...prev, nickName: e.target.value }))
              }
              placeholder="닉네임을 입력하세요"
              readOnly={!updataNick ? true : false}
              updataNick={updataNick}
            />
            <NicknameButton
              type="button"
              onClick={() => {
                setUpdataNick(true);
              }}
              updataNick={updataNick}
            >
              수정하기
            </NicknameButton>
            <p>이메일</p>
            <input
              type="text"
              value={userData.email}
              readOnly
              className="noneFocus"
            />
          </ProfileInfoArea>
        </ProfileArea>
        <div>
          <div
            style={{
              width: "100%",
              height: "1px",
              background: "var(--color-gray-300)",
              marginTop: "25px",
            }}
          ></div>
          <label>
            <InfoBox_1>
              <div>
                <Link
                  to="/terms/notice"
                  style={{
                    color: "var(--color-gray-700)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <AiFillNotification
                    style={{
                      color: "var(--color-gray-300)",
                    }}
                  />
                  공지사항
                </Link>
                <IoIosArrowForward
                  style={{ fontSize: "12px", color: "var(--color-gray-500)" }}
                />
              </div>
              <div>
                <Link
                  to="/terms/FAQ"
                  style={{
                    color: "var(--color-gray-700)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <BsFillPatchQuestionFill
                    style={{
                      color: "var(--color-gray-300)",
                    }}
                  />
                  자주 묻는 질문
                </Link>
                <IoIosArrowForward
                  style={{ fontSize: "12px", color: "var(--color-gray-500)" }}
                />
              </div>
              <div>
                <Link
                  to="/terms/service"
                  style={{
                    color: "var(--color-gray-700)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <BiCalendar
                    style={{
                      color: "var(--color-gray-300)",
                    }}
                  />
                  카투사 출석부
                </Link>
                <IoIosArrowForward
                  style={{ fontSize: "12px", color: "var(--color-gray-500)" }}
                />
              </div>
            </InfoBox_1>
          </label>
          <div
            style={{
              width: "100%",
              height: "1px",
              background: "var(--color-gray-300)",
              marginTop: "5px",
            }}
          ></div>
          <label>
            <InfoBox_2>
              <div>
                <Link
                  to="/terms/service"
                  style={{
                    color: "var(--color-gray-700)",
                  }}
                >
                  서비스 이용약관
                </Link>
                <IoIosArrowForward
                  style={{ fontSize: "12px", color: "var(--color-gray-500)" }}
                />
              </div>
              <div>
                <Link
                  to="/terms/privacy"
                  style={{
                    color: "var(--color-gray-700)",
                  }}
                >
                  개인정보 처리 방침
                </Link>
                <IoIosArrowForward
                  style={{ fontSize: "12px", color: "var(--color-gray-500)" }}
                />
              </div>
              <div>
                <Link
                  to="/terms/marketing"
                  style={{
                    color: "var(--color-gray-700)",
                  }}
                >
                  마케팅 정보 수집 및 수신 동의
                </Link>
                <IoIosArrowForward
                  style={{ fontSize: "12px", color: "var(--color-gray-500)" }}
                />
              </div>
              <div>
                <Link
                  to="/terms/payment"
                  style={{
                    color: "var(--color-gray-700)",
                  }}
                >
                  결제대행 서비스 이용약관
                </Link>
                <IoIosArrowForward
                  style={{ fontSize: "12px", color: "var(--color-gray-500)" }}
                />
              </div>
            </InfoBox_2>
          </label>
          <div
            style={{
              width: "100%",
              height: "1px",
              background: "var(--color-gray-300)",
              marginTop: "5px",
            }}
          ></div>
          <InfoBox_3>
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
          </InfoBox_3>
        </div>
      </form>
      <div
        style={{
          width: "100%",
          height: "100px",
        }}
      ></div>
    </div>
  );
};

export default UserPage;
