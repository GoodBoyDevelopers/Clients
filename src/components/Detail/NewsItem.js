// NewsItem.js

import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import ArticleDetail from "./ArticleDetail";

const NewsItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }

  .contents {
    width: 100%; /* 컨테이너의 너비를 100%로 설정 */
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5 rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

const NewsItem = ({ article }) => {
  const { title, url, urlToImage } = article;
  const [isVisible, setVisible] = useState(false);
  const handleToggleContent = () => {
    setVisible((isVisible) => !isVisible);
  };
  const chevronIconSize = "1.3rem"; // 아이콘 크기
  return (
    <NewsItemBlock>
      <div style={{ display: "flex", alignItems: "center" }}>
        {urlToImage && (
          <div className="thumbnail">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img src={urlToImage} alt="thumbnail" />
            </a>
          </div>
        )}
        <div className="contents">
          <h2>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </h2>
        </div>
        <button
          className="toggle-button"
          style={{ width: chevronIconSize, height: chevronIconSize }}
          onClick={handleToggleContent}
        >
          {isVisible ? (
            <FontAwesomeIcon
              icon={faChevronUp}
              style={{ fontSize: chevronIconSize }}
            ></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon
              icon={faChevronDown}
              style={{ fontSize: chevronIconSize }}
            ></FontAwesomeIcon>
          )}
        </button>
      </div>
      {isVisible ? <ArticleDetail></ArticleDetail> : ""}
      <style>
        {`
       .toggle-button {
         background: none;
         border: none;
         padding: 0;
         font-size: inherit;
         color: inherit;
         cursor: pointer;
       }
     `}
      </style>
    </NewsItemBlock>
  );
};

export default NewsItem;
