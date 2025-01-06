import { IoIosArrowBack } from "react-icons/io";
import { HeaderWrap, MainWrap } from "../../pages/terms/Service";
import { Link } from "react-router-dom";

const Event = () => {
  const eventData = [
    "/images/event/image-0.webp",
    "/images/event/image-1.webp",
    "/images/event/image-2.webp",
    "/images/event/image-3.webp",
    "/images/event/image-4.webp",
    "/images/event/image-5.webp",
    "/images/event/image-6.webp",
  ];
  return (
    <div>
      <HeaderWrap>
        <IoIosArrowBack
          onClick={() => window.history.back()}
          style={{ cursor: "pointer" }}
        />
        <h2>이벤트</h2>
      </HeaderWrap>
      <MainWrap>
        {eventData.map((item, index) => (
          <Link to="#" key={index}>
            <img src={item} alt="event" style={{ width: "100%" }} />
          </Link>
        ))}
      </MainWrap>
    </div>
  );
};

export default Event;
