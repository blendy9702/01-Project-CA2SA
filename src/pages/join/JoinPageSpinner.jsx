import { BiSolidCoffeeBean } from "react-icons/bi";
// import "../styles/Loading.css";
const JoinPageSpinner = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        className="loadingIcon"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "5px",
        }}
      >
        <BiSolidCoffeeBean />
        <BiSolidCoffeeBean />
        <BiSolidCoffeeBean />
      </div>
      <p>인증코드를 전송 중입니다.</p>
    </div>
  );
};

export default JoinPageSpinner;
