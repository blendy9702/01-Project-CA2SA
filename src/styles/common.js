import styled from "@emotion/styled";

export const PrimaryButton = styled.button`
  background-color: var(--primary-color);
  color: #fff;
  padding: 10px;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: 0.1s;
  &:active {
    background-color: var(--primary-darker);
  }
`;
export const SecondaryButton = styled.button`
  background-color: var(--secondary-color);
  color: #fff;
  padding: 10px;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.1s;
  font-size: 16px;
  &:active {
    background-color: var(--secondary-darker);
  }
`;
export const AlternativeButton = styled.button`
  background-color: #fff;
  color: var(--color-gray-500);
  padding: 10px;
  border: 1px solid var(--color-gray-500);
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: 0.1s;
  &:active {
    color: var(--primary-darker);
    background-color: #cfe799;
    border: 1px solid var(--primary-darker);
  }
`;

export const SearchInput = styled.input`
  background-color: var(--color-gray-100);
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
export const UesrInput = styled.input`
  background-color: transparent;
  color: var(--color-gray-500);
  border: 0;
  border-bottom: 1px solid var(--color-gray-300);
  padding: 10px 15px;
  outline: none;
  transition: 0.1s;
  &:focus {
    color: var(--color-gray-700);
    border-bottom: 1px solid var(--primary-color); /* focus 상태 스타일 */
  }
`;

export const CheckboxInput = styled.input``;
export const RadioInput = styled.input``;

export const LineTabSeleter = styled.div``;
export const BubbleTabSeleter = styled.div``;

export const DockBarNav = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 640px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  background-color: #fff;
  border: 1px solid var(--color-gray-300);
  a {
    display: flex;
    width: 33.3%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    font-size: 16px;
  }
  a > svg {
    font-size: 24px;
  }
`;
