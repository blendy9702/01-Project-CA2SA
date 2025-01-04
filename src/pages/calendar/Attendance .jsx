import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import DockBar from "../../components/DockBar";
import "../../styles/attendance.css"; // css import
import { FaCoffee } from "react-icons/fa";
import { BiSolidDownArrow } from "react-icons/bi";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Attendance = () => {
  const [date, setDate] = useState(new Date());
  const [orderData, setOrderData] = useState([]); // 주문 데이터
  const userInfo = JSON.parse(sessionStorage.getItem("userData"));
  const userId = userInfo?.resultData?.userId;

  const navigate = useNavigate();

  useEffect(() => {
    const OrderData = async () => {
      try {
        const res = await axios.get(
          `/api/order?signed_user_id=${userId}&page=1&size=30`,
        );
        const resultData = res.data.resultData || [];
        setOrderData(resultData); // 데이터 상태 업데이트
        // console.log(resultData);
      } catch (error) {
        console.error("주문 데이터 로드 실패:", error);
      }
    };

    OrderData(); // 데이터 가져오기
  }, []);

  const fixTimezoneOffset = date => {
    const newDate = new Date(date);
    newDate.setUTCHours(newDate.getUTCHours() + 9); // 한국 시간대에 맞게 9시간 더하기
    return newDate;
  };

  const getTileContent = ({ date, view }) => {
    if (view === "month") {
      const fixedDate = fixTimezoneOffset(date); // 시간대 오프셋 수정
      const formattedDate = fixedDate.toISOString().split("T")[0]; // YYYY-MM-DD 형식으로 변환
      const matchingOrder = orderData.find(
        order => order.createdAt.split(" ")[0] === formattedDate,
      );

      const defaultImage = (
        <FaCoffee
          style={{
            color: "var(--color-gray-300)",
            fontSize: "30px",
            marginBottom: "10px",
          }}
        />
      );
      const completedImage = (
        <FaCoffee
          style={{
            color: "var(--primary-color)",
            fontSize: "30px",
            marginBottom: "10px",
          }}
        />
      );

      if (matchingOrder) {
        // 클릭 이벤트 처리
        return (
          <div
            onClick={
              () => navigate(`/orders`)
              // matchingOrder.orderMenuList.length > 0 &&
              // navigate(`/orders/detail?orderId=${matchingOrder.orderId}`)
            }
            style={{
              cursor:
                matchingOrder.orderMenuList.length > 0 ? "pointer" : "default",
            }}
          >
            {matchingOrder.orderMenuList.length > 0
              ? completedImage
              : defaultImage}
          </div>
        );
      }

      return defaultImage; // 기본 이미지 반환
    }

    return null; // 다른 view에서는 아무 내용도 표시하지 않음
  };

  const formatShortWeekday = (locale, date) => {
    const weekName = ["일", "월", "화", "수", "목", "금", "토"];
    return weekName[date.getDay()];
  };

  const customNavigationLabel = ({ date }) => {
    const month = date.toLocaleString("ko-KR", { month: "long" }); // 12월 형식
    const year = date.getFullYear(); // 2024 형식
    return (
      <div>
        <span>{`${year}년 ${month}`}</span>
        <BiSolidDownArrow style={{ marginLeft: "10px", fontSize: "14px" }} />
      </div>
    );
  };

  return (
    <div>
      <Calendar
        onChange={setDate}
        value={date}
        calendarType="gregory"
        next2Label={null}
        nextLabel={null}
        prev2Label={null}
        prevLabel={null}
        locale="ko-KR" // 한국어로 설정
        formatDay={(locale, date) => date.getDate()}
        navigationLabel={customNavigationLabel} // 네비게이션 라벨을 커스텀
        tileContent={getTileContent}
      ></Calendar>

      <DockBar />
    </div>
  );
};

export default Attendance;
