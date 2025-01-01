import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import QnaList from "../../components/terms/QNAList";
import { HeaderWrap } from "./Service";
import qnaData from "../../server/qnaData.json";

const FAQ = () => {
  console.log(qnaData);
  const [qnaItem, setQnaItem] = useState(null);

  const toggleAccordion = index => {
    setQnaItem(qnaItem === index ? null : index);
  };
  return (
    <div>
      <HeaderWrap>
        <IoIosArrowBack
          onClick={() => window.history.back()}
          style={{ cursor: "pointer" }}
        />
        <h2>자주 묻는 질문</h2>
      </HeaderWrap>
      {qnaData.map((item, index) => (
        <QnaList
          key={index}
          index={index}
          item={item}
          isActive={qnaItem === index}
          onToggle={toggleAccordion}
        />
      ))}
    </div>
  );
};

export default FAQ;
