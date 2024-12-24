import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import styled from "styled-components";

const ListBoxItem = styled.div`
  width: 33.3%;
  img {
    border-radius: 16px;
  }
  h3 {
    margin-top: 5px;
    font-size: 18px;
    font-weight: 500;
  }
  p {
    margin-top: 5px;
    font-size: 16px;
    color: var(--color-gray-500);
    svg {
      font-size: 12px;
      color: var(--secondary-color);
      margin-right: 3px;
    }
  }
`;

const ListBox = ({ cafe }) => {
  return (
    <ListBoxItem>
      <Link to="#">
        <strong>카페 이름:</strong> <span>{cafe?.cafeName || "정보 없음"}</span>
      </Link>
    </ListBoxItem>
  );
};

export default ListBox;
