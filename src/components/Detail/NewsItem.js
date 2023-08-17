import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import ArticleDetail from "./ArticleDetail";
import { Link } from "react-router-dom";

const NewsItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .thumbnail {
    margin-right: 1rem;
    cursor: pointer;

    img {
      display: block;
      width: 100px;
      height: 70px;
      object-fit: cover;
      border-radius: 5px;
    }
  }

  .contents {
    width: 100%;
    cursor: pointer;

    h1 {
      font-family: "Pretendard-SemiBold";
      margin-right: 8px;
      margin-bottom: 8px;
      margin-top: 8px;
      font-size: 12px;
      color: grey;
    }

    h2 {
      margin: 0;
      font-family: "Pretendard-SemiBold";
      margin-right: 8px;
      font-size: 15px;
      text-overflow: ellipsis;
      display: -webkit-box;
      word-wrap: break-word;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;

      a {
        color: black;
        text-decoration: none;
      }
    }

    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }

  & + & {
    margin-top: 3rem;
  }

  .toggle-button {
    background: none;
    border: none;
    padding: 0;
    font-size: inherit;
    color: inherit;
    cursor: pointer;
    margin-right: 6px;
  }
`;

const ChevronIcon = styled(FontAwesomeIcon)`
  font-size: ${(props) => props.size};
`;

const NewsItem = ({ article, isFirstItem, differences, index }) => {
  // console.log(differences);
  // console.log(index);
  // props에 isFirstItem 추가

  const { origin_link, created_at, newspaper_name, title, thumbnail } = article;

  const [isVisible, setVisible] = useState(isFirstItem);

  const handleToggleContent = () => {
    setVisible(!isVisible);
  };

  const chevronIconSize = "1.3rem";

  return (
    <NewsItemBlock>
      <div style={{ display: "flex", alignItems: "center" }}>
        {
          <div
            className="thumbnail"
            onClick={() => window.open(`${origin_link}`, "_blank")}
          >
            <img
              src={thumbnail ? thumbnail : "../img/likelion.png"}
              alt="thumbnail"
            />
          </div>
        }
        <div
          className="contents"
          onClick={() => window.open(`${origin_link}`, "_blank")}
          style={{ width: "100%" }}
        >
          <h1>{newspaper_name}</h1>
          <h2>{title}</h2>
          <h1>{created_at}</h1>
        </div>
        <button className="toggle-button" onClick={handleToggleContent}>
          {isVisible ? (
            <ChevronIcon icon={faChevronUp} size={chevronIconSize} />
          ) : (
            <ChevronIcon icon={faChevronDown} size={chevronIconSize} />
          )}
        </button>
      </div>
      <div className="article-details-container">
        {isVisible && (
          <ArticleDetail
            article={article}
            differences={differences}
            index={index}
          />
        )}
      </div>
    </NewsItemBlock>
  );
};

export default NewsItem;
