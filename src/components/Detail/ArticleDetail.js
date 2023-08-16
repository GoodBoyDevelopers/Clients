import React, { useState } from "react";
import styled from "styled-components";
import SkeletonSummary from "../skeleton/SkeletonSummary";

const ArticleDetail = ({ article, differences, index }) => {
  console.log(differences);
  const [activeMenu, setActiveMenu] = useState("summary");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <Container>
      <MenuLine>
        <MenuButton
          active={activeMenu === "summary"}
          onClick={() => handleMenuClick("summary")}
        >
          기사 요약
        </MenuButton>
        <MenuButton
          active={activeMenu === "comparison"}
          onClick={() => handleMenuClick("comparison")}
        >
          영상과 비교
        </MenuButton>
      </MenuLine>
      <MenuContent>
        {activeMenu === "summary" && (
          <ContentText>{article.summary}</ContentText>
        )}
        {activeMenu === "comparison" && (
          <>
            {differences.length === 0 ? (
              <SkeletonSummary />
            ) : (
              <ContentText>
                {differences[index] ? differences[index].reason : "로딩 중..."}
              </ContentText>
            )}
          </>
        )}
      </MenuContent>
    </Container>
  );
};

const ContentText = styled.h3`
  font-family: "Pretendard-Regular";
  font-size: 15px;
  line-height: normal;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MenuLine = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const MenuButton = styled.div`
  flex: 1;
  border: none;
  cursor: pointer;
  font-weight: bold;
  color: #333;
  border-bottom: ${(props) => (props.active ? "2px solid black" : "none")};
  padding: 15px 0px;
  margin-top: 10px;
  text-align: center;
  font-family: "Pretendard-SemiBold";
`;

const MenuContent = styled.div`
  background-color: #f4f4f4;
  padding: 15px 15px 30px 15px;
  border-radius: 0px 0px 15px 15px;
  font-family: "Pretendard-Regular";
`;

export default ArticleDetail;
