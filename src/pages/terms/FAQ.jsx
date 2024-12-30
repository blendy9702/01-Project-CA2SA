import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import QnaList from "../../components/terms/QNAList";
import { HeaderWrap } from "./Service";

const FAQ = () => {
  const data = [
    {
      title: "Section 1",
      content:
        "This is the content of section 1.This is the content of section 1.This is the content of section 1.This is the content of section 1.This is the content of section 1.This is the content of section 1.",
    },
    { title: "Section 2", content: "This is the content of section 2." },
    { title: "Section 3", content: "This is the content of section 3." },
  ];
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
      {data.map((item, index) => (
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
