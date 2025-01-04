import styled from "@emotion/styled";
export const OrderMemoInput = styled.input`
  background-color: ${props =>
    props.isChecked ? "#fff" : "var(--color-gray-100)"};
  color: var(--color-gray-500);
  border: 1px solid var(--color-gray-500);
  border-radius: 8px;
  padding: 10px 15px;
  outline: none;
  transition: 0.1s;
  &:focus {
    color: var(--color-gray-700);
  }
`;
