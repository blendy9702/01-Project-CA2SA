import { PiCoffeeBeanDuotone } from "react-icons/pi";

import "../styles/Loading.css"; // css import
import { useEffect, useState } from "react";
const Loading = () => {
  const lodingWord = "매장 정보를 불러오는 중입니다...";
  const [title, setTitle] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setTitle(prevTitleValue => {
        let result = prevTitleValue
          ? prevTitleValue + lodingWord[count]
          : lodingWord[0];
        setCount(count + 1);

        if (count >= lodingWord.length) {
          setCount(0);
          setTitle("");
        }

        return result;
      });
    }, 100);

    return () => {
      clearInterval(typingInterval);
    };
  });
  return (
    <div
      className="loading"
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="loadingIcon">
        <PiCoffeeBeanDuotone />
        <PiCoffeeBeanDuotone />
        <PiCoffeeBeanDuotone />
      </div>
      <p>{title}</p>
    </div>
  );
};

export default Loading;
