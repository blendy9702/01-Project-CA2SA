import { PulseLoader } from "react-spinners";

const JoinPageSpinner = ({ loading }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "20px",
      }}
    >
      <PulseLoader color="var(--primary-color)" loading={loading} />
      <div>
        <span
          style={{
            padding: "20px",
          }}
        >
          인증코드를 전송 중입니다.
        </span>
      </div>
    </div>
  );
};

export default JoinPageSpinner;
