import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import DockBar from "../../components/DockBar";
import "../../styles/attendance.css"; // css import

const Attendance = () => {
  const [date, setDate] = useState(new Date());
  const [dateImages, setDateImages] = useState({});

  const formatShortWeekday = (locale, date) => {
    const weekName = ["일", "월", "화", "수", "목", "금", "토"];
    return weekName[date.getDay()];
  };

  const customNavigationLabel = ({ date }) => {
    const month = date.toLocaleString("ko-KR", { month: "long" }); // 12월 형식
    const year = date.getFullYear(); // 2024 형식
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <span>{`${year}년 ${month}`}</span>
        <img
          src="/path/to/your/image.png"
          alt="icon"
          style={{ width: "16px", height: "16px", marginLeft: "8px" }}
        />
      </div>
    );
  };
  const defaultImage = "🎈";
  const completedImage = "🎆";
  const handleDateClick = date => {
    const formattedDate = date.toISOString().split("T")[0];
    setDateImages(prev => ({
      ...prev,
      [formattedDate]: completedImage, // 클릭한 날짜를 조건 만족 이미지로 변경
    }));
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
        navigationLabel={customNavigationLabel} // 네비게이션 라벨을 커스텀
        formatDay={(locale, date) => date.getDate()} // 날짜 숫자만 반환
        onClickDay={handleDateClick} // 날짜 클릭 시 상태 업데이트
        tileContent={({ date, view }) => {
          if (view === "month") {
            // 월간 뷰에서만 렌더링
            const formattedDate = date.toISOString().split("T")[0];
            const imageUrl = dateImages[formattedDate] || defaultImage; // 상태 기반 이미지 결정

            return <div>{imageUrl}</div>;
          }
          return null;
        }}
      ></Calendar>

      <DockBar />
    </div>
  );
};

export default Attendance;
