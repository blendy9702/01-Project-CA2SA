import React, { useEffect, useState } from "react";
import axios from "axios";
import { CustomOverlayMap, Map } from "react-kakao-maps-sdk";
import styled from "@emotion/styled";
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

const MarkerPos = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  transition: 0.2s;
  z-index: 99;
  cursor: pointer;
`;

const MapMain = () => {
  const [cafeData, setCafeData] = useState([]);
  const [openInfo, setOpenInfo] = useState(null);
  console.log(onclick, openInfo);
  const [state, setState] = useState({
    center: {
      lat: 35.868408,
      lng: 128.594054,
    },
    errMsg: null,
    isLoading: true,
  });

  // 지도의 로딩 상태를 관리하는 state를 선언합니다
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const cafeInfo = async () => {
    try {
      const res = await axios.get(
        `api/cafe/map?user_latitude=${state.center.lat}&user_longitude=${state.center.lng}`,
      );
      console.log(res.data);
      setCafeData(res.data.resultData);
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
  // 컴포넌트가 마운트될 때 카카오맵 스크립트를 로드합니다
  useEffect(() => {
    // 카카오맵 스크립트 엘리먼트를 생성합니다
    const kakaoMapScript = document.createElement("script");
    // 스크립트를 비동기로 로드하도록 설정합니다
    kakaoMapScript.async = true;
    // 카카오맵 SDK URL을 설정합니다 (환경변수에서 API 키를 가져옵니다)
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KKO_MAP_KEY}&autoload=false`;

    // 스크립트 로드가 완료되면 실행될 이벤트 리스너를 추가합니다
    kakaoMapScript.addEventListener("load", () => {
      // 카카오맵을 로드하고 로딩 상태를 true로 변경합니다
      window.kakao.maps.load(() => {
        setIsMapLoaded(true);
      });
    });

    // 생성한 스크립트를 head에 추가합니다
    document.head.appendChild(kakaoMapScript);

    // 컴포넌트가 언마운트될 때 스크립트를 제거합니다
    return () => {
      document.head.removeChild(kakaoMapScript);
    };
  }, []);

  // 지도가 로드되지 않았다면 로딩 메시지를 표시합니다
  if (!isMapLoaded) {
    return <div>지도를 불러오는 중입니다...</div>;
  }
  const handleMapClick = () => {
    setOpenInfo(null); // 빈 공간 클릭 시 창 닫기
  };

  return (
    <div>
      <Map // 지도를 표시할 Container
        center={state.center}
        style={{
          // 지도의 크기
          width: "100%",
          height: "calc(100vh - 105px)",
          position: "relative",
          zIndex: 10,
        }}
        level={4} // 지도의 확대 레벨
        onClick={handleMapClick}
      >
        {cafeData.map(cafe => (
          <CustomOverlayMap
            key={cafe.cafeId}
            position={{
              lat: cafe.latitude, // 카페의 위도
              lng: cafe.longitude, // 카페의 경도
            }}
          >
            <MapMarkerStyle
              onClick={
                () =>
                  setOpenInfo(prev =>
                    prev?.cafeId === cafe.cafeId ? null : cafe,
                  ) // 클릭된 카페 정보를 저장
              }
            >
              {cafe.cafeName}
              {openInfo === cafe.cafeId && ( // 해당 카페만 열리도록 조건 추가
                <CustomOverlayMap
                  position={{
                    lat: cafe.latitude,
                    lng: cafe.longitude,
                  }}
                >
                  <MapMarkrtItem key={cafe.cafeId} cafe={cafe} />
                </CustomOverlayMap>
              )}
            </MapMarkerStyle>
          </CustomOverlayMap>
        ))}
        {openInfo && (
          <MarkerPos>
            <MapMarkrtItem cafe={openInfo} />
          </MarkerPos>
        )}
      </Map>
    </div>
  );
};

export default MapMain;
