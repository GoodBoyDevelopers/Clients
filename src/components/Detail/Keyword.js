// Keyword.js

import React, { useState } from "react";
import NewsList from "./NewsList";
import styled from "styled-components";

function Keyword() {
  const keywords = [
    "Keyword1",
    "Keyword2keyword2",
    "Keyword3",
    "keyword4keyword4keyword",
    "keyword5keyword5keyword5",
  ]; // 키워드 목록
  const [selectedKeyword, setSelectedKeyword] = useState(keywords[0]);

  const handleKeywordClick = (keyword) => {
    setSelectedKeyword(keyword);
  };

  return (
    <div>
      <KeywordContainer>
        {keywords.map((keyword) => (
          <KeywordButton
            key={keyword}
            onClick={() => handleKeywordClick(keyword)}
            style={{
              marginRight: "10px",
              backgroundColor:
                selectedKeyword === keyword ? "#404040" : "white",
              color: selectedKeyword === keyword ? "#FFF" : "#000",
            }}
          >
            {keyword}
          </KeywordButton>
        ))}
      </KeywordContainer>
      <div>
        {selectedKeyword && (
          <NewsList />
          // 여기에 선택된 키워드에 따른 내용을 표시하는 코드를 추가할 수 있습니다.
        )}
      </div>
    </div>
  );
}

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
  cursor: pointer;
`;

const KeywordContainer = styled.div`
  display: "flex";
  justify-content: "center";
  padding: "10px";
  margin-left: 20px;
`;

export default Keyword;
