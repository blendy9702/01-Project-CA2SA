import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const NotFoundStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  img {
    width: 80%;
  }
  h1 {
    margin: 20px 0;
    font-size: 32px;
    color: var(--primary-color);
  }
  p {
    font-size: 16px;
    color: var(--color-gray-700);
  }
  button {
    margin-top: 20px;
    padding: 20px 30px;
    border-radius: 30px;
    border: none;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    background-color: var(--primary-color);
    cursor: pointer;
    transition: 0.1s;
    &:active {
      background-color: var(--primary-darker);
    }
  }
`;

const NotFound = () => {
  const homeNav = useNavigate();

  const handleClickIndex = () => {
    homeNav("/");
  };
  return (
    <NotFoundStyle>
      <img src="/images/404/404.png" alt="" />
      <h1>찾을 수 없어요 !</h1>
      <p>
        주소를 잘못 입력하셨거나 <br />
        페이지가 삭제 또는 수정되었을수도 있습니다!
      </p>
      <button onClick={handleClickIndex}>홈으로 가기</button>
    </NotFoundStyle>
  );
};

export default NotFound;
