import React from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const HeaderTitle = ({ goHome, margin, font }) => {
  return (
    <>
      <TitleLogoDiv onClick={goHome} margin={margin}>
        <TitleBig font={font}>
          유체크 <FontAwesomeIcon icon={faCheck} color="#04D400" />
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
