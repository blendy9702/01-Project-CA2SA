import { FaSpinner } from "react-icons/fa";
import { SyncLoader } from "react-spinners";
const Loading = () => {
  return (
    <div>
      <SyncLoader
        color="#88C200"
        cssOverride={{}}
        loading
        margin={5}
        speedMultiplier={1}
      >
        <div className="spinner-container">
          <FaSpinner className="spinner-icon" />
        </div>
      </SyncLoader>
    </div>
  );
};

export default Loading;
