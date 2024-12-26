import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import styled from "styled-components";

const MarkerWrap = styled.div`
  width: 300px;
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
        object-fit: cover;
      }
    }
    .txt {
      display: flex;
      padding-left: 20px;
      flex-direction: column;
      justify-content: center;
      h5 {
      }
      p {
        margin-top: 7px;
        font-size: 14px;
        color: var(--color-gray-500);
        svg {
          color: var(--secondary-color);
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
            <FaLocationDot />
            {cafe.location}
          </p>
        </div>
      </Link>
    </MarkerWrap>
  );
};

export default MapMarkrtItem;
