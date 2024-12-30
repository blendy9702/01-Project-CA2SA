import "swiper/css";
import { BannerWrap } from "./ListMain";

const SlideItem = ({ image }) => {
  return (
    <BannerWrap>
      <BannerWrap href="#">
        <img src={image} alt="mainBanner" style={{ width: "100%" }} />
      </BannerWrap>
    </BannerWrap>
  );
};

export default SlideItem;
