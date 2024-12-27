import { BannerWrap } from "./ListMain";

const SlideItem = ({ {ListMain}: {ListMain} }) => {
  const slide = [
    "images/main_visual_image-0.png",
    "images/main_visual_image-1.png",
    "images/main_visual_image-2.png",
    "images/main_visual_image-3.png",
    "images/main_visual_image-4.png",
    "images/main_visual_image-5.png",
    "images/main_visual_image-6.png",
    "images/main_visual_image-7.png",
  ];
  return (
    <div>
      <BannerWrap to="#">
        <img src={slide} alt="mainBanner" />
      </BannerWrap>
    </div>
  );
};

export default SlideItem;
