import { BiTimeFive } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const MarkerWrap = styled.div`
  width: 100%;
  height: 100px;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  overflow: hidden;

  div {
    width: 100%;
    height: 100%;
    display: flex;
    > .imgWrap {
      width: 100px;
      height: 100%;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .txt {
      display: flex;
      padding: 0 20px;
      flex-direction: column;
      justify-content: center;
      h5 {
      }
      p {
        margin-top: 5px;
        font-size: 14px;
        color: var(--color-gray-500);
        svg {
          font-size: 14px;
          color: var(--secondary-color);
          vertical-align: bottom;
          margin-right: 3px;
        }
      }
    }
  }
`;

const MapMarkrtItem = ({ cafe }) => {
  const showCafe = useNavigate();
  const viewProduct = cafeId => {
    showCafe(`/order/${cafeId}`); // 동적으로 상품 ID를 사용해 페이지 이동
  };

  return (
    <MarkerWrap>
      <div onClick={() => viewProduct(cafe.cafeId)}>
        <div className="imgWrap">
          <img
            src="http://112.222.157.156:5214/pic/cafe/${cafe.afeId}/${cafe.cafePic}"
            alt={cafe.cafeName}
          />
        </div>
        <div className="txt">
          <h5>{cafe.cafeName}</h5>
          <p>
            <BiTimeFive />
            {cafe.openTime.split(":").slice(0, 2).join(":")}~
            {cafe.closeTime.split(":").slice(0, 2).join(":")}
          </p>
          <p>
            <FaLocationDot />
            {cafe.distance}m
          </p>
        </div>
      </div>
    </MarkerWrap>
  );
};

export default MapMarkrtItem;
