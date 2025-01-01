import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import DockBar from "../../components/DockBar";
import "../../styles/attendance.css"; // css import
import { FaCertificate } from "react-icons/fa6";
import { BiSolidDownArrow } from "react-icons/bi";

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
      <div>
        <span>{`${year}년 ${month}`}</span>
        <BiSolidDownArrow />
      </div>
    );
  };
  const defaultImage = (
    <FaCertificate style={{ color: "#ddd", fontSize: "30px" }} />
  );
  const completedImage = (
    <FaCertificate style={{ color: "blue", fontSize: "30px" }} />
  );
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
        onClickDay={handleDateClick} // 날짜 클릭 시 상태 업데이트
        formatDay={(locale, date) => null} // 기본 <abbr> 제거
        tileContent={({ date, view }) => {
          if (view === "month") {
            const formattedDate = date.toISOString().split("T")[0];
            const imageUrl = dateImages[formattedDate] || defaultImage;

            return (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div>{imageUrl}</div>
                <abbr
                  aria-label={`${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}`}
                >
                  {date.getDate()}
                </abbr>
              </div>
            );
          }
          return null;
        }}
      ></Calendar>

      <DockBar />
    </div>
  );
};

export default Attendance;
