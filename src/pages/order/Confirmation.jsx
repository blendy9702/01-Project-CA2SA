import { useLocation } from "react-router-dom";
import NavBar from "../../components/order/NavBar";

function Confirmation() {
  // useNavigation
  const location = useLocation();
  const getOrderInfoResultData = location.state;

  return (
    <div>
      <NavBar path={"/"} title={"결제 완료"} scrollevent={false} />
    </div>
  );
}

export default Confirmation;
