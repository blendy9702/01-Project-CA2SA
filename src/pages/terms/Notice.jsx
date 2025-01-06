import { IoIosArrowBack } from "react-icons/io";
import { HeaderWrap, MainWrap } from "./Service";
import notice from "../../server/notice.json";
import styled from "@emotion/styled";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const ListStyle = styled.li`
  width: 100%;
  height: 85px;
  display: flex;
  gap: 7px;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid var(--color-gray-100);
  cursor: pointer;
  transition: background-color 0.3s;
  p {
    font-size: 18px;
  }
  small {
  }
  font-size: 14px;
  color: var(--color-gray-500);
`;
const SlidePanel = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isVisible }) => (isVisible ? "50%" : "-100%")}; /* 애니메이션 */
  transform: ${({ isVisible }) =>
    isVisible ? "translateX(50%)" : "translateX(0)"}; /* 애니메이션 */
  max-width: 640px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 20px;
  transition: right 0.3s;
  z-index: 1000;
`;
const Content = styled.div`
  div {
    padding: 15px 0;
    border-bottom: 1px solid #ddd;
    small {
      display: inline-block;
      font-size: 14px;
      color: var(--color-gray-500);
      margin-top: 8px;
    }
  }
  p {
    margin-top: 20px;
    color: var(--color-gray-700);
  }
`;

const Notice = () => {
  const [selectedContent, setSelectedContent] = useState(""); // 단일 상태로 관리

  const handleItemClick = notice => {
    setSelectedContent(notice); // 클릭 시 content를 상태에 저장
  };

  const closeSlide = () => {
    setSelectedContent(""); // 닫기 버튼 클릭 시 슬라이드 숨기기
  };

  return (
    <div>
      <HeaderWrap>
        <IoIosArrowBack
          onClick={() => window.history.back()}
          style={{ cursor: "pointer" }}
        />
        <h2>공지사항</h2>
      </HeaderWrap>
      <MainWrap>
        <ul>
          {notice.map((notice, index) => (
            <ListStyle key={index} onClick={() => handleItemClick(notice)}>
              <p>{notice.title}</p>
              <small>{notice.date}</small>
            </ListStyle>
          ))}
        </ul>
      </MainWrap>
      {/* 슬라이드 컴포넌트 */}
      {/* 슬라이드 패널 */}
      <SlidePanel isVisible={!!selectedContent}>
        <IoClose onClick={closeSlide} style={{ fontSize: "24px" }} />
        {selectedContent && (
          <Content>
            <div>
              <h3>{selectedContent.title}</h3>
              <small>{selectedContent.date}</small>
            </div>
            <p>{selectedContent.content}</p>
          </Content>
        )}
      </SlidePanel>
    </div>
  );
};

export default Notice;
