import { useState } from "react";
import Answers from "./Answers";

const Questions = ({ items }) => {
  const [qnaItem, setQnaItem] = useState(null);

  const toggleAccordion = index => {
    setQnaItem(qnaItem === index ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <Answers
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

export default Questions;
