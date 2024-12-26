import React, { useEffect, useState } from "react";
import axios from "axios";
import { Map, CustomOverlayMap } from "react-kakao-maps-sdk";
import styled from "styled-components";

const MapMain = () => {
  const [cafeData, setCafeData] = useState([]);
  const [positions, setPositions] = useState([]);

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
    if (!window.kakao || cafeData.length === 0) return;

    const geocoder = new window.kakao.maps.services.Geocoder();

    const promises = cafeData.map(
      cafe =>
        new Promise(resolve => {
          geocoder.addressSearch(cafe.location, (result, status) => {
            if (status === window.kakao.maps.services.Status.OK) {
              resolve({
                ...cafe,
                lat: parseFloat(result[0].y),
                lng: parseFloat(result[0].x),
              });
            } else {
              resolve(null);
            }
          });
        }),
    );

    Promise.all(promises).then(results => {
      const validPositions = results.filter(pos => pos !== null);
      setPositions(validPositions);
    });
  }, [cafeData]);

  const MapMarkerStyle = styled.div`
    background-color: #fff;
    border-radius: 16px;
    padding: 10px 20px;
    text-align: center;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  `;
  return (
    <Map
      center={{
        lat: positions[0]?.lat || 35.8683476,
        lng: positions[0]?.lng || 128.5940482,
      }}
      style={{ width: "100%", height: "100vh" }}
      level={3}
    >
      {positions.map((pos, id) => (
        <CustomOverlayMap
          key={id}
          position={{ lat: pos.lat, lng: pos.lng }}
          yAnchor={1} // 오버레이의 y 축 기준
        >
          <MapMarkerStyle>{pos.cafeName}</MapMarkerStyle>
        </CustomOverlayMap>
      ))}
    </Map>
  );
};

export default MapMain;
