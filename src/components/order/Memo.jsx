import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { OrderContext } from "../../contexts/OrderContext";

const Memo = () => {
  const { setOrder, order } = useContext(OrderContext);
  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // 직접 입력창용
  const [isChecked, setIsChecked] = useState(false);
  const [inputText, setInputText] = useState("");
  const [memo, setMemo] = useState([]);

  const handleChangeClick = e => {
    e.target.checked ? setIsChecked(true) : setIsChecked(false),
      setInputText("");
  };

  // order에 메모 넣기
  const handleChangeMemo = e => {
    console.log(e.target.value);
  };

  return (
    <div>
      <p>요청 사항</p>

      <div>
        <input
          type="checkbox"
          value={"연하게 해주세요"}
          onChange={e => handleChangeMemo(e)}
        />
        <label>연하게 해주세요</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"캐리어에 담아주세요"}
          onChange={e => handleChangeMemo(e)}
        />
        <label>캐리어에 담아주세요</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"얼음 많이 넣어주세요"}
          onChange={e => handleChangeMemo(e)}
        />
        <label>얼음 많이 넣어주세요</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"얼음 적게 넣어주세요"}
          onChange={e => handleChangeMemo(e)}
        />
        <label>얼음 적게 넣어주세요</label>
      </div>
      <div>
        <input type="checkbox" onChange={e => handleChangeClick(e)} />
        <label>직접 입력</label>
      </div>
      <div>
        <input
          type="text"
          value={inputText}
          placeholder="상세요청사항을 입력해주세요"
          readOnly={!isChecked}
          onChange={e => {
            setInputText(e.target.value);
            handleChangeMemo(e);
          }}
        />
      </div>
      <button type="button">완료</button>
    </div>
  );
};

export default Memo;
