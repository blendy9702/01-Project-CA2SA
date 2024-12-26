import React, { useEffect, useState } from "react";
import axios from "axios";
import { CustomOverlayMap, Map } from "react-kakao-maps-sdk";
import styled from "styled-components";
import MapMarkrtItem from "../MapMarkrtItem";

const MapMarkerStyle = styled.div`
  position: relative;
  padding: 10px 20px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 16px;
  &:after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 8.66px 5px 0px 5px;
    border-color: #ffffff transparent transparent transparent;
  }
`;

const MapMain = () => {
  const [cafeData, setCafeData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState({
    center: {
      lat: 35.868408,
      lng: 128.594054,
    },
    errMsg: null,
    isLoading: true,
  });

  const cafeInfo = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/resultData`);
      setCafeData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    cafeInfo();
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(
        position => {
          setState(prev => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }));
        },
        err => {
          setState(prev => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        },
      );
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      setState(prev => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없어요..",
        isLoading: false,
      }));
    }
  }, []);

  return (
    <div>
      <Map // 지도를 표시할 Container
        center={state.center}
        style={{
          // 지도의 크기
          width: "100%",
          height: "100vh",
        }}
        level={4} // 지도의 확대 레벨
      >
        {cafeData.map((cafe, id) => (
          <CustomOverlayMap
            key={cafe.id}
            position={{
              lat: cafe.latitude, // 카페의 위도
              lng: cafe.longitude, // 카페의 경도
            }}
          >
            <MapMarkerStyle onClick={() => setIsOpen(true)}>
              {cafe.cafeName}
              {isOpen && (
                <CustomOverlayMap
                  position={{
                    lat: cafe.latitude, // 카페의 위도
                    lng: cafe.longitude, // 카페의 경도
                  }}
                >
                  <MapMarkrtItem key={cafe.id} cafe={cafe} />
                </CustomOverlayMap>
              )}
            </MapMarkerStyle>
          </CustomOverlayMap>
        ))}
      </Map>
    </div>
  );
};

export default MapMain;
