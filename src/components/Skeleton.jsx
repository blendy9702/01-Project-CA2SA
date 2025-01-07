import styled from "@emotion/styled";
import { keyframes } from "styled-components";

export const shimmer = keyframes`
  0% {
          background-position: 100% 0%;
        }
        100% {
          background-position: 0% 0%;
        }
  `;

export const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  max-width: 300px;
`;
export const SkeletonImage = styled.div`
  width: 100%;
  height: 150px;
  background: #e0e0e0;
  border-radius: 16px;
  animation: ${shimmer} 0.3s linear infinite;
`;
export const SkeletonText = styled.div`
  width: 100%;
  height: 20px;
  background: #e0e0e0;
  border-radius: 16px;
  animation: ${shimmer} 0.3s linear infinite;
`;

const Skeleton = () => {
  return (
    <div style={{ width: "33.3%" }}>
      <SkeletonWrapper>
        <SkeletonImage css={shimmer} />
        <SkeletonText css={shimmer} />
        <SkeletonText css={shimmer} />
      </SkeletonWrapper>
    </div>
  );
};

export default Skeleton;
