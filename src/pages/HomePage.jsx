import styled from "@emotion/styled";
import Header from "../components/Header";
import { useContext, useEffect, useState } from "react";
import ListMain from "../components/main/ListMain";
import MapMain from "../components/main/MapMain";
import DockBar from "../components/DockBar";
import { OrderContext } from "../contexts/OrderContext";

const TabMenuBtn = styled.div`
  width: 50%;
  height: 45px;
  line-height: 45px;
  font-size: 18px;
  background: none;
  border: 0;
  text-align: center;
  font-weight: 500;
  cursor: pointer;
  border-bottom: ${props =>
    props.isActiveIndex
      ? "3px solid var(--secondary-color)"
      : "1px solid var(--color-gray-500)"};
  color: ${props =>
    props.isActiveIndex ? "var(--secondary-color)" : "var(--color-gray-500"};
`;

const HomePage = () => {
  const { order } = useContext(OrderContext);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    console.log(order);
  }, [order]);
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <TabMenuBtn
          isActiveIndex={activeIndex === 0}
          onClick={() => setActiveIndex(0)}
        >
          리스트로 주문하기
        </TabMenuBtn>
        <TabMenuBtn
          isActiveIndex={activeIndex === 1}
          onClick={() => setActiveIndex(1)}
        >
          지도로 주문하기
        </TabMenuBtn>
      </div>
      {activeIndex === 0 && <ListMain />}
      {activeIndex === 1 && <MapMain />}
      <DockBar />
    </div>
  );
};

export default HomePage;
