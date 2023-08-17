// NewsList.js
import React from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import SkeletonArticle from "../skeleton/SkeletonArticle";

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

const NewsList = ({ news, differences }) => {
  console.log(news, differences);
  return (
    <NewsListBlock>
      {news
        ? news.map((article, index) => (
            <NewsItem
              index={index}
              article={article}
              differences={differences}
              isFirstItem={index === 0}
            />
          ))
        : new Array(3).fill(1).map((_, i) => {
            return <SkeletonArticle />;
          })}
    </NewsListBlock>
  );
};

export default NewsList;
