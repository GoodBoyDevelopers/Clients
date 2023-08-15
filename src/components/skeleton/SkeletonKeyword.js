import React from "react";
import { styled } from "styled-components";
import SkeletonItem from "./SkeletonItem";

const SkeletonKeyword = () => {
  return (
    <div>
      <SSkeletonKeyword />
    </div>
  );
};

const SSkeletonKeyword = styled(SkeletonItem)`
  width: 50px;
  height: 12px;
  border-radius: 8px;
`;

export default SkeletonKeyword;
