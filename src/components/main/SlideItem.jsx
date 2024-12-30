import "swiper/css";
import { BannerWrap } from "./ListMain";

const SlideItem = ({ image }) => {
  return (
    <BannerWrap to="">
      <img src={image} alt="mainBanner" style={{ width: "100%" }} />
    </BannerWrap>
  );
};

export default SlideItem;
