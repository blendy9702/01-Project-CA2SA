import styled from "@emotion/styled";
import { useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";

const QNAstyle = styled.div`
  .questionTitle {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--color-gray-100);

    strong {
      font-size: 16px;
      span {
        font-size: 24px;
        color: var(--primary-color);
        margin-right: 10px;
      }
      margin-right: auto;
    }
  }
  .answerItem {
    height: 100%;
    background-color: var(--color-white);
    p {
      margin: 20px 10px;
      color: var(--color-gray-700);
      span {
        color: var(--color-gray-700);
        margin-right: 5px;
      }
    }
  }
`;

const QnaList = ({ index, item, isActive, onToggle }) => {
  const contentRef = useRef(null);

  return (
    <QNAstyle>
      <div className="questionTitle" onClick={() => onToggle(index)}>
        <strong>
          <span>Q</span>
          {item.title}
        </strong>
        <IoIosArrowDown />
      </div>
      <div
        className="answerItem"
        ref={contentRef}
        style={{
          maxHeight: isActive ? `${contentRef.current.scrollHeight}px` : "0px",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        <p>
          <span>A.</span>
          {item.content}
        </p>
      </div>
    </QNAstyle>
  );
};

export default QnaList;
