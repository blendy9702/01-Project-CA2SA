import { IoIosArrowBack } from "react-icons/io";

const MenuDetail = ({ item, popupDetail, setPopUpDetail }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  // 개별 데이터 뜯기
  const id = searchParams.get("id");
  const cate = searchParams.get("cate");

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
      /order/menudetail?id={id}&cate={cate} 블러그 목록 (queryString방식)
      {item.menuName}
    </div>
  );
};

export default MenuDetail;
