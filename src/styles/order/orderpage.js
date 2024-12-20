import styled from "@emotion/styled";

export const OrderPageDiv = styled.div`
  max-width: 640px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  button {
    position: fixed;
    height: 60px;
    left: 50%;
    transform: translateX(-50%);
    bottom: 7px;
    width: 600px;
  }
`;

export const ThumImageDiv = styled.div`
  width: 100%;
  height: 300px;
  background-color: gray;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ContentDiv = styled.div`
  width: 100%;
  padding: 0 20px;
  margin-bottom: 11px;

  .title-box {
    display: flex;
    align-items: center;
    height: 69px;
    border-bottom: 1px solid var(--color-gray-300);
  }
  .cafe-info {
    padding: 20px 0;
    border-bottom: 1px solid var(--color-gray-300);
    h3 {
      margin-bottom: 20px;
    }
    .info-box {
      display: flex;
      height: 38px;
      gap: 27px;
      margin-bottom: 10px;
      .info-subtitle {
        font-size: 16px;
        width: 54px;
        color: var(--color-gray-500);
      }
      .info-detail {
        .tel {
          text-decoration: underline;
        }
        p {
          font-size: 16px;
          color: var(--color-gray-900);
        }
      }
    }
    .last {
      margin-bottom: 20px;
    }
    .map {
      width: 100%;
      height: 209px;
      background-color: darkgray;
      margin-bottom: 10px;
      border-radius: 8px;
    }
    .business-number {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: 97px;
      p {
        color: var(--color-gray-700);
        font-size: 12px;
        margin-right: 5px;
      }
      .icon {
        color: var(--color-gray-700);
        width: 12px;
        height: 12px;
      }
    }
  }
`;
