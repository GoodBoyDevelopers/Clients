import React from "react";
import { styled } from "styled-components";
import SkeletonItem from "./SkeletonItem";

const SkeletonSummary = () => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <SSkeletonSummary />
      <SSkeletonSummary />
      <SSkeletonSummary />
      <SSkeletonSummary />
    </div>
  );
};

const SSkeletonSummary = styled(SkeletonItem)`
  width: 100%;
  height: 12px;
  margin-bottom: 4px;
  border-radius: 8px;
`;

export default SkeletonSummary;
