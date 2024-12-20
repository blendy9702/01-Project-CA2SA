import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IoIosArrowBack } from "react-icons/io";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

// yup schema
const menuSchema = yup.object({
  // 체크박스 배열을 정리하기 위해 useForm에 controller 추가, 체크박스 부분을 태그 교체
});

const MenuDetail = () => {
  // 앞에서 보낸 navigate의 state 받아오기
  const location = useLocation();
  const menuData = location.state;
  console.log(menuData); //여기에 cafeId가 필요함(카페정보 불러오기에 cafeID가 필요)
  const navigate = useNavigate();
  // 쿼리 스트링 주소 처리
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);

  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(),
  });

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          navigate("/order/menulist");
        }}
      >
        <IoIosArrowBack />
      </button>
      주소: /order/menudetail?menuId={menuData.menuId} 메뉴 옵션 선택 페이지
      <form onSubmit={() => {}}>
        {/* 숨긴 정보 */}
        <div>
          <input type="text" name="cafeId" id="userId" value="cafeId" />
          <input type="text" name="userId" id="userId" value="userId" />
        </div>
        {/* 메뉴 세부 옵션 */}
        {/* HOT/ICE */}
        <div className="option">
          <div className="title box">
            <h4>HOT/ICE</h4>
            <p>필수</p>
          </div>
          <div>
            <input type="radio" name="state" id="hot" />
            <label htmlFor="hot">HOT</label>
            <span className="addPrice">+0원</span>
          </div>
          <div>
            <input type="radio" name="state" id="ice" />
            <label htmlFor="ice">ICE</label>
            <span className="addPrice">+0원</span>
          </div>
        </div>
        {/* SIZE */}
        <div className="option">
          <div className="title box">
            <h4>SIZE</h4>
            <p>필수</p>
          </div>
          <div>
            <input type="radio" name="size" id="regular" />
            <label htmlFor="regular">R</label>
            <span className="addPrice">+0원</span>
          </div>
          <div>
            <input type="radio" name="size" id="large" />
            <label htmlFor="large">L</label>
            <span className="addPrice">+500원</span>
          </div>
          <div>
            <input type="radio" name="size" id="liter" />
            <label htmlFor="liter">1L</label>
            <span className="addPrice">+2,000원</span>
          </div>
        </div>
        {/* 원두 옵션 */}
        <div className="option">
          <div className="title box">
            <h4>원두 옵션</h4>
            <p>선택</p>
          </div>
          <div>
            <input
              type="checkbox"
              name="Beans[]"
              id="darkBeans"
              value={"다크 원두 변경"}
            />
            <label htmlFor="darkBeans">다크 원두 변경</label>
            <span className="addPrice">+0원</span>
          </div>
          <div>
            <input
              type="checkbox"
              name="Beans[]"
              id="fruitBeans"
              value={"다크 원두 변경"}
            />
            <label htmlFor="fruitBeans">과일 원두 변경</label>
            <span className="addPrice">+0원</span>
          </div>
        </div>
        {/* 추가 */}
        <div className="option">
          <div className="title box">
            <h4>추가</h4>
            <p>선택</p>
          </div>
          <div>
            <input
              type="checkbox"
              name="addOption[]"
              id="shot"
              value={"샷추가"}
            />
            <label htmlFor="darkBeans">샷추가</label>
            <span className="addPrice">+0원</span>
          </div>
          <div>
            <input
              type="checkbox"
              name="addOption[]"
              id="double-shot"
              value={"다크 원두 변경"}
            />
            <label htmlFor="double-shot">샷추가(2번)</label>
            <span className="addPrice">+0원</span>
          </div>
          <div>
            <input
              type="checkbox"
              name="addOption[]"
              id="add-syrup"
              value={"시럽 추가"}
            />
            <label htmlFor="add-syrup">시럽 추가</label>
            <span className="addPrice">+0원</span>
          </div>
        </div>
        <button type="submit">바로 주문</button>
        <button type="submit">4,300원 담기</button>
      </form>
    </div>
  );
};

export default MenuDetail;
