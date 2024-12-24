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

const ListBox = ({ name, distance, imgSrc }) => {
  return (
    <ListBoxItem>
      <Link to="#">
        <img src={imgSrc} alt={name} />
        <h3>{name}</h3>
        <p>
          <FaLocationDot />
          {distance}
        </p>
      </Link>
    </ListBoxItem>
  );
};

export default ListBox;
