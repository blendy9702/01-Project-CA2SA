import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { BiTimeFive } from "react-icons/bi";
import styled from "styled-components";

const MarkerWrap = styled.div`
  width: 100%;
  height: 100px;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  overflow: hidden;

  a {
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
  return (
    <MarkerWrap>
      <Link to="#">
        <div className="imgWrap">
          <img src={cafe.cafePic} alt={cafe.cafeName} />
        </div>
        <div className="txt">
          <h5>{cafe.cafeName}</h5>
          <p>
            <BiTimeFive />
            {cafe.openTime}~{cafe.closeTime}
          </p>
          <p>
            <FaLocationDot />
            {cafe.distance}m
          </p>
        </div>
      </Link>
    </MarkerWrap>
  );
};

export default MapMarkrtItem;
