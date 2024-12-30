import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import NavBar from "../../components/order/NavBar";
import { ContainerDiv, LayoutDiv } from "../../styles/order/orderpage";

const mockData = {
  resultMessage: "string",
  resultData: [
    {
      orderId: 0,
      nickName: "string",
      cafeName: "string",
      location: "string",
      pickUpTime: "string",
      createdAt: "string",
      memo: "string",
      orderProgress: 0,
      orderMenuList: [
        {
          orderMenuId: 0,
          orderMenuName: "string",
          price: 0,
          count: 0,
          options: [
            {
              menuOptionId: 0,
              optionName: "string",
              addPrice: 0,
            },
          ],
        },
      ],
    },
  ],
};
const mockDataResultData = mockData.resultData;

function Confirmation() {
  // useSearchParams
  const [searchParams, setSearchParams] = useSearchParams();
  // useNavigation
  const navigate = useNavigate();
  const location = useLocation();
  const locationData = location.state;
  // const cafeId = locationData[0];
  // const cafeInfo = locationData[1];
  // const fromPage = locationData[2];
  const handleNavigateClose = () => {
    navigate("/");
  };

  return (
    <div style={{ position: "relative", paddingBottom: 30, width: "100%" }}>
      <NavBar
        onClick={handleNavigateClose}
        icon={"close"}
        title={"결제 완료"}
      />
      <LayoutDiv>
        <ContainerDiv>
          <h4 style={{ color: "var(--primary-color)" }}>컴포즈 동성로점</h4>
        </ContainerDiv>
      </LayoutDiv>
    </div>
  );
}

export default Confirmation;
