import axios from "axios";
import moment from "moment/moment";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DockBar from "../../components/DockBar";
import NavBar from "../../components/order/NavBar";
import {
  CateListDiv,
  ContainerDiv,
  LayoutDiv,
  PeriodButton,
} from "../../styles/order/orderpage";
import OrderedMenu from "../../components/orders/OrderedMenu";
import { OrderContext } from "../../contexts/OrderContext";

// 주문 조회 기간(일 기준)
const perriodArr = [7, 30, 90, 180, 360];

const OrdersPage = () => {
  const { order } = useContext(OrderContext);
  useEffect(() => {
    console.log(order);
  }, [order]);
  const userId = order.userId;
  // uesNavigate
  const navigate = useNavigate();
  const handleNavigateHome = () => {
    navigate("/");
  };

  // useState
  const [orderList, setOrderList] = useState([]);
  const [selectedPeriod, setSelectedPeriod] = useState(0);
  const [filterdData, setFilterdData] = useState([]);

  // 주문 조회
  useEffect(() => {
    const getOrderList = async () => {
      try {
        const res = await axios.get(
          `/api/order?signed_user_id=${userId}&page=1&size=30`,
        );
        const resultData = res.data.resultData;
        console.log(res.data);
        setOrderList(resultData);
        const filterdArr = resultData.filter(item => {
          return moment(item.createdAt).isBetween(
            moment().subtract(7, "days"),
            moment(),
            null,
            `[]`,
          );
        });
        setFilterdData(filterdArr);
        console.log(filterdArr);
      } catch (error) {
        console.log(error);
      }
    };
    getOrderList();
    console.log(perriodArr[selectedPeriod]);
  }, []);

  // 클릭 시 기간 변경
  const handleClickPeriod = index => {
    setSelectedPeriod(index);
  };
  // 일 단위를 월, 년으로 바꿔 적기
  const makePeriodName = item => {
    switch (item) {
      case 7:
        return "1주일";
      case 30:
        return "1개월";
      case 90:
        return "3개월";
      case 180:
        return "6개월";
      case 360:
        return "1년";
      default:
        return "기타";
    }
  };
  // 기간 별 배열 뽑아내기

  useEffect(() => {
    const now = moment();
    const beforeDay = moment().subtract(perriodArr[selectedPeriod], "days");
    const filterdArr = [...orderList].filter(item => {
      return moment(item.createdAt).isBetween(beforeDay, now, null, `[]`);
    });
    setFilterdData(filterdArr);
  }, [selectedPeriod]);

  return (
    <div style={{ paddingBottom: 80 }}>
      <NavBar onClick={handleNavigateHome} title={"주문 내역"} icon={"back"} />
      <LayoutDiv>
        {/* 기간 설정 */}
        <ContainerDiv>
          <CateListDiv>
            {perriodArr.map((item, index) => {
              return (
                <PeriodButton
                  key={index}
                  type="button"
                  onClick={() => handleClickPeriod(index)}
                  isSelected={selectedPeriod === index}
                >
                  {makePeriodName(item)}
                </PeriodButton>
              );
            })}
          </CateListDiv>
        </ContainerDiv>
        {/* 기간 별 조회 결과 */}
        <ContainerDiv>
          {filterdData
            ? filterdData.map((item, index) => {
                return <OrderedMenu key={index} item={item} />;
              })
            : "정보를 불러오는 중입니다."}
        </ContainerDiv>
      </LayoutDiv>
      <DockBar />
    </div>
  );
};

export default OrdersPage;
