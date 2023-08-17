import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "./logo.svg";

const HeaderTitle = ({ goHome, margin, width, height }) => {
  return (
    <>
      <TitleLogoDiv onClick={goHome} margin={margin}>
        <TitleBig>
          <Logo width={width} height={height} />
        </TitleBig>
      </TitleLogoDiv>
    </>
  );
};

HeaderTitle.defaultProps = {
  font: "32px",
};

const TitleLogoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: ${(props) => props.margin};
  line-height: 1;
  cursor: pointer;
`;

const TitleBig = styled.span`
  font-family: "GmarketSansMedium";
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-size: ${(props) => (props.font ? props.font : "30px")};
  padding-right: 10px;
`;

export default React.memo(HeaderTitle);
