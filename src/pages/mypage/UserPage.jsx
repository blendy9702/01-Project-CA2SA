import axios from "axios";
import moment from "moment";
import * as yup from "yup";
import { useContext, useEffect, useState } from "react";
import { AiFillCamera, AiFillNotification } from "react-icons/ai";
import { BiCalendar, BiSolidUser } from "react-icons/bi";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { UserPageContext } from "../../contexts/UserPageContext";
import {
  InfoBox,
  InfoBox_3,
  InputFocus,
  MyPageDiv,
  PaymentArea,
  PaymentDiv,
  ProfileArea,
  ProfileImg,
  ProfileInfoArea,
} from "../../styles/join/userpage";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const myPageSchema = yup.object({
  nickName: yup.string().min(3, "3글자 이상 입력하세요."),
});

const UserPage = () => {
  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(myPageSchema),
    defaultValues: { nickName: "" },
    mode: "onChange",
  });
  const [loading, setLoading] = useState(true);
  const [updataNick, setUpdataNick] = useState(false);
  const [payment, setPayment] = useState(0);
  const { myPage, setMyPage } = useContext(UserPageContext);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const [upw, setUpw] = useState();
  const today = moment().format("YYYY-MM-DD");
  const first_day_of_month = moment().startOf("month").format("YYYY-MM-DD");

  const updateNickname = async () => {
    try {
      const res = await axios.put("/api/user/info", {
        userId: userData.userId,
        nickName: userData.nickName,
      });

      if (res.data.resultMessage === "1") {
        alert("닉네임이 변경되었습니다.");

        // 세션 스토리지 업데이트
        sessionStorage.setItem(
          "userData",
          JSON.stringify({
            ...userData,
            nickName: res.data.nickName,
          }),
        );
      } else {
        alert(res.data.resultMessage || "닉네임 변경에 실패했습니다.");
      }
    } catch (error) {
      console.log("닉네임 변경 오류 : ", error);
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
  const usedMoney = async () => {
    try {
      const res = await axios.get(`/api/user/used?`, {
        params: {
          today: today,
          first_day_of_month: first_day_of_month,
          user_id: userData.userId,
        },
      });

      if (res.data && res.data.resultData.totalUsedAmount !== null) {
        setPayment(prev => ({
          ...prev,
          totalUsedAmount: res.data.resultData.totalUsedAmount,
        }));
        return res.data.resultData.totalUsedAmount;
      } else {
        console.error("Total used amount is missing");
      }
    } catch (error) {
      console.log(error);
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
    navigate("/login");
  };

  const handleToOrders = () => {
    navigate("/orders");
  };

  useEffect(() => {
    const storedData = sessionStorage.getItem("userData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setUserData(parsedData.resultData || {});
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading && userData.userId) {
      usedMoney();
    }
  }, [loading, userData]);

  if (loading) {
    return;
  }

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
              <div
                style={{
                  backgroundColor: "var(--color-white)",
                  border: "1px solid var(--color-gray-100)",
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <BiSolidUser
                  style={{
                    fontSize: "30px",
                    color: "var(--color-gray-500)",
                  }}
                />
              </div>
              <a href="#">
                <AiFillCamera />
              </a>
            </div>
          </ProfileImg>
          <PaymentArea>
            <p>
              {userData.nickName}님이 이번달 카투사에
              <br />
              투자하신 총 금액은?
            </p>
            <PaymentDiv>
              <span>
                {payment.totalUsedAmount ? (
                  <span className="consumer">
                    {payment.totalUsedAmount.toLocaleString()}
                    <span className="won">원</span>
                  </span>
                ) : (
                  <>
                    <span>0</span>
                    <span className="won">원</span>
                  </>
                )}
              </span>
              <button onClick={handleToOrders}>더보기</button>
            </PaymentDiv>
          </PaymentArea>
          <ProfileInfoArea>
            <p>닉네임</p>
            <InputFocus
              type="text"
              value={userData.nickName || ""}
              {...register("nickName")}
              onChange={e =>
                setUserData(prev => ({ ...prev, nickName: e.target.value }))
              }
              placeholder="닉네임을 입력하세요"
            />
            <p style={{ color: "var(--error-clolr)" }}>
              {errors.nickName?.message}
            </p>
            <p>이메일</p>
            <input
              type="text"
              value={userData.email || ""}
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
          <div>
            <InfoBox>
              <Link to="/terms/notice">
                <div>
                  <AiFillNotification />
                  공지사항
                  <IoIosArrowForward />
                </div>
              </Link>
              <Link to="/terms/FAQ">
                <div>
                  <BsFillPatchQuestionFill />
                  자주 묻는 질문
                  <IoIosArrowForward />
                </div>
              </Link>

              <Link to="/calendar">
                <div>
                  <BiCalendar />
                  카투사 출석부
                  <IoIosArrowForward />
                </div>
              </Link>
            </InfoBox>
          </div>
          <div
            style={{
              width: "100%",
              height: "1px",
              background: "var(--color-gray-300)",
              marginTop: "5px",
            }}
          ></div>
          <label>
            <InfoBox>
              <Link to="/terms/service">
                <div>
                  서비스 이용약관 <IoIosArrowForward />
                </div>
              </Link>
              <Link to="/terms/privacy">
                <div>
                  개인정보 처리 방침 <IoIosArrowForward />
                </div>
              </Link>

              <Link to="/terms/marketing">
                <div>
                  마케팅 정보 수집 및 수신 동의 <IoIosArrowForward />
                </div>
              </Link>

              <Link to="/terms/payment">
                <div>
                  결제대행 서비스 이용약관 <IoIosArrowForward />
                </div>
              </Link>
            </InfoBox>
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
