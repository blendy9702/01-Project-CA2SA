import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const CafeDataStyle = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 80px;
  align-items: center;
  border-bottom: 1px solid var(--color-gray-100);
  cursor: pointer;
  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 8px;
  }
  .cafeDesc {
    margin-left: 20px;
    margin-right: auto;
    font-size: 16px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    span {
      font-size: 14px;
      color: var(--color-gray-500);
      margin-top: 5px;
      > svg {
        font-size: 12px;
        color: var(--secondary-color);
        vertical-align: -1px;
        margin-right: 3px;
      }
    }
  }
`;

const SearchList = ({ cafe }) => {
  const showCafe = useNavigate();
  const viewProduct = cafeId => {
    showCafe(`/order?cafeId=${cafeId}`, { state: [{ cafeId: cafeId }] }); // 동적으로 상품 ID를 사용해 페이지 이동
  };
  return (
    <CafeDataStyle onClick={() => viewProduct(cafe.cafeId)}>
      <span>
        <img src={cafe.cafePic} alt={cafe.cafeName} />
      </span>
      <p className="cafeDesc">
        {cafe.cafeName}
        <span>
          <FaLocationDot />
          {cafe.distance}m
        </span>
      </p>
      <IoIosArrowForward
        style={{
          fontSize: "24px",
          color: "var(--color-gray-500)",
        }}
      />
    </CafeDataStyle>
  );
};

export default SearchList;
