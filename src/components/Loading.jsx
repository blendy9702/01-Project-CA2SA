import { BiSolidCoffeeBean } from "react-icons/bi";
import "../styles/Loading.css"; // css import
const Loading = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="loadingIcon">
        <BiSolidCoffeeBean />
        <BiSolidCoffeeBean />
        <BiSolidCoffeeBean />
      </div>
      <p>로딩 중입니다</p>
    </div>
  );
};

export default Loading;
