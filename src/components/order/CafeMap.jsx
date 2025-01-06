import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const CafeMap = ({ cafeInfo }) => {
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  const userId = userData.resultData.userId;
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });
  const nowMap = { lat: cafeInfo.latitude, lng: cafeInfo.longitude };

  useEffect(() => {
    const kakaoMapScript = document.createElement("script");
    kakaoMapScript.async = true;
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KKO_MAP_KEY}&autoload=false`;

    kakaoMapScript.addEventListener("load", () => {
      window.kakao.maps.load(() => {
        setIsMapLoaded(true);
      });
    });
    document.head.appendChild(kakaoMapScript);
    return () => {
      document.head.removeChild(kakaoMapScript);
    };
  }, []);

  // 지도가 로드되지 않았다면 로딩 메시지를 표시합니다
  if (!isMapLoaded) {
    return <div>지도를 불러오는 중입니다...</div>;
  }
  return (
    <div>
      <Map
        center={nowMap}
        style={{ width: "640px", height: "209px" }}
        level={3}
      >
        <MapMarker position={nowMap} />
      </Map>
    </div>
  );
};
export default CafeMap;
