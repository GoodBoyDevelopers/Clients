// Keyword.js

import React from "react";
import styled from "styled-components";
import SkeletonKeyword from "../skeleton/SkeletonKeyword";

const Keyword = ({ keywords }) => {
  // 키워드 클릭기능 필요 X
  // const [selectedKeyword, setSelectedKeyword] = useState(keywords[0]);

  // const handleKeywordClick = (keyword) => {
  //   setSelectedKeyword(keyword);
  // };

  return (
    <div>
      <KeywordContainer>
        {keywords.map((keyword) => (
          <KeywordButton>{keyword}</KeywordButton>
        ))}
        {!keywords.length && (
          <div>
            <KeywordButton>
              <SkeletonKeyword />
            </KeywordButton>
            <KeywordButton>
              <SkeletonKeyword />
            </KeywordButton>
            <KeywordButton>
              <SkeletonKeyword />
            </KeywordButton>
          </div>
        )}
      </KeywordContainer>
    </div>
  );
};

const KeywordButton = styled.button`
  color: #000;
  font-family: "Pretendard-Regular";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 20px;
  border: 0.5px solid #b0b0b0;
  flex-grow: 1;
  height: 1.5rem;
  flex-shrink: 0;
  margin-right: 0.5rem;
  margin-top: 1rem;
`;

const KeywordContainer = styled.div`
  align-items: center;
  margin-left: 20px;
`;

export default Keyword;
