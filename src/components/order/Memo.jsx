import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { OrderContext } from "../../contexts/OrderContext";
import { CustomInputDiv, MemoDiv } from "../../styles/order/orderpage";
import { PrimaryButton, SearchInput } from "../../styles/common";

const Memo = () => {
  const { setOrder, order, popMemo, setPopMemo } = useContext(OrderContext);
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

  const inputRef = useRef(null);
  const textRef = useRef(null);

  // memo에 체크한 것들 넣기
  const handleChangeMemo = e => {
    console.log(e.target.value);
    const prevMemo = [...memo];
    const updatedMemo = [...memo, e.target.value];
    e.target.checked ? setMemo([...updatedMemo]) : setMemo([...prevMemo]);
    if (inputRef.current.checked === true) {
      setMemo([...memo, textRef.current.value]);
    }
  };
  const sendMemo = () => {
    const comfirmMemo = memo.join();
    setOrder({ ...order, memo: comfirmMemo });
    setPopMemo(!memo);
  };
  useEffect(() => {}, [memo]);

  return (
    <MemoDiv>
      <div className="inner">
        <div className="content">
          <h5>요청 사항</h5>
          <div className="inputList">
            <CustomInputDiv>
              <input
                type="checkbox"
                id="request1"
                value={"연하게 해주세요"}
                onChange={e => handleChangeMemo(e)}
              />
              <label htmlFor="request1">연하게 해주세요</label>
            </CustomInputDiv>
            <CustomInputDiv>
              <input
                type="checkbox"
                id="request2"
                value={"캐리어에 담아주세요"}
                onChange={e => handleChangeMemo(e)}
              />
              <label htmlFor="request2">캐리어에 담아주세요</label>
            </CustomInputDiv>
            <CustomInputDiv>
              <input
                type="checkbox"
                id="request3"
                value={"얼음 많이 넣어주세요"}
                onChange={e => handleChangeMemo(e)}
              />
              <label htmlFor="request3">얼음 많이 넣어주세요</label>
            </CustomInputDiv>
            <CustomInputDiv>
              <input
                type="checkbox"
                id="request4"
                value={"얼음 적게 넣어주세요"}
                onChange={e => handleChangeMemo(e)}
              />
              <label htmlFor="request4">얼음 적게 넣어주세요</label>
            </CustomInputDiv>
            <CustomInputDiv>
              <input
                type="checkbox"
                id="request5"
                ref={inputRef}
                onChange={e => handleChangeClick(e)}
              />
              <label htmlFor="request5">직접 입력</label>
            </CustomInputDiv>
          </div>
          <SearchInput
            type="text"
            className="searchInput"
            value={inputText}
            placeholder="상세요청사항을 입력해주세요"
            readOnly={!isChecked}
            ref={textRef}
            onChange={e => {
              setInputText(e.target.value);
            }}
            onBlur={e => handleChangeMemo(e)}
          />
          <PrimaryButton type="button" onClick={() => sendMemo()}>
            완료
          </PrimaryButton>
        </div>
      </div>
    </MemoDiv>
  );
};

export default Memo;
