// Keyword.js

import React from "react";
import NewsList from "./NewsList";
import styled from "styled-components";

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
          <KeywordButton
            key={keyword}
            // onClick={() => handleKeywordClick(keyword)}
            style={{
              marginRight: "10px",
              backgroundColor: "white",
              color: "#000",
            }}
          >
            {keyword}
          </KeywordButton>
        ))}
      </KeywordContainer>
      <div>
        <NewsList></NewsList>
      </div>
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
  cursor: pointer;
`;

const KeywordContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-left: 20px;
`;

export default Keyword;
