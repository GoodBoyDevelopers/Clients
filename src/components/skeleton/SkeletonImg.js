import React from "react";
import { styled } from "styled-components";
import SkeletonItem from "./SkeletonItem";

const SkeletonImg = () => {
  return (
    <div>
      <SSkeletonImg />
    </div>
  );
};

const SSkeletonImg = styled(SkeletonItem)`
  width: 100px;
  height: 70px;
  border-radius: 5px;
`;

export default SkeletonImg;
