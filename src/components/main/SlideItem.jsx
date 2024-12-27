import { useEffect } from "react";
import { BannerWrap } from "./ListMain";

const SlideItem = ({ onSendData }) => {
  useEffect(() => {
    onSendData(slide);
  }, [onSendData]); // 의존성 배열에 `onSendData` 추가 (최적화)

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
