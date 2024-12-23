import Header from "../components/Header";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import ListBox from "../components/main/ListBox";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Link to="">
        <img src="https://picsum.photos/600/120" alt="" />
      </Link>
      <div>
        <h2>요즘은 #아샷추 가 대세</h2>
        <Link>
          <span>
            더보기
            <IoIosArrowForward />
          </span>
        </Link>
        <ListBox />
      </div>
      <div>
        <h2>나와 가까운 매장</h2>
        <Link>
          <span>
            더보기
            <IoIosArrowForward />
          </span>
        </Link>
        <ListBox />
      </div>
      <Link>
        <img src="https://picsum.photos/600/100" alt="" />
      </Link>
      <Link>
        <img src="https://picsum.photos/600/100" alt="" />
      </Link>
      <footer>
        <h1>logo</h1>
        <ul>
          <li>
            <Link>이용약관</Link>
          </li>
          <li>
            <Link>개인정보 처리 방침</Link>
          </li>
          <li>
            <Link>사업자 정보 확인</Link>
          </li>
          <li>
            <Link>개인정보 제 3자 제공동의</Link>
          </li>
        </ul>
        <p>
          카투사는 통신판매 중개자이며, 통신판매 당사자가 아닙니다. 따라서
          패스오더는 상품 거래 정보 및 거래에 대한 책임을 지지않습니다.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
