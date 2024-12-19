import { IoIosArrowBack } from "react-icons/io";

const MenuDetail = ({ item, popupDetail, setPopUpDetail }) => {
  return (
    <div style={{ width: 100, height: 100, backgroundColor: "gray" }}>
      <button
        type="button"
        onClick={() => {
          setPopUpDetail(false);
          console.log(popupDetail);
        }}
      >
        <IoIosArrowBack />
      </button>
      MenuDetail
      {item.menuName}
    </div>
  );
};

export default MenuDetail;
