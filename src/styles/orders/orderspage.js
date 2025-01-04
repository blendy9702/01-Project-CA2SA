import styled from "@emotion/styled";

export const OrderedMenuDiv = styled.div`
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid var(--color-gray-100);
  &:first-child {
    padding-top: 0;
  }
  .state {
    width: 100%;
    display: flex;
    gap: 10px;
    padding-bottom: 10px;
    p {
      color: var(--color-gray-500);
    }
    .createdAt {
      font-weight: 300;
    }
  }
  .cafe-menu {
    width: 100%;
    padding-bottom: 20px;
    .cafe {
      font-size: 18px;
      font-weight: bold;
      padding-bottom: 5px;
    }
    .menu {
      display: flex;
      gap: 10px;
    }
  }
  .orderButton {
    width: 100%;
    display: flex;
    gap: 8px;

    button {
      width: 50%;
    }
  }
`;
