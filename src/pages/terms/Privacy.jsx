import { IoIosArrowBack } from "react-icons/io";
import { HeaderWrap } from "./Service";

function Privacy() {
  return (
    <div>
      <HeaderWrap>
        <IoIosArrowBack
          onClick={() => window.history.back()}
          style={{ cursor: "pointer" }}
        />
        <h2>개인정보 처리 방침</h2>
      </HeaderWrap>
    </div>
  );
}

export default Privacy;
