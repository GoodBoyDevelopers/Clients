// NewsList.js
import React from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding: 1.5rem;
  width: 100%;
  margin: 0 auto;
  margin-top: 10px;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const sampleArticle = {
  title: "제목",
  description: "내용",
  url: "https://google.com",
  urlToImage: "https://via.placeholder.com/160",
};

const NewsList = ({ news }) => {
  return (
    <NewsListBlock>
      {news &&
        news.map((article, index) => (
          <NewsItem
            key={index}
            article={article}
            isFirstItem={index === 0}
          ></NewsItem>
        ))}
    </NewsListBlock>
  );
};

export default NewsList;
