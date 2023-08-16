import React from "react";
import { styled } from "styled-components";
import SkeletonItem from "./SkeletonItem";

const SkeletonTitle = () => {
  return (
    <div>
      <SSkeletonTitle />
      <SSkeletonTitle />
    </div>
  );
};

const SSkeletonTitle = styled(SkeletonItem)`
  width: 100%;
  height: 12px;
  margin-bottom: 4px;
  border-radius: 8px;
`;

export default SkeletonTitle;
