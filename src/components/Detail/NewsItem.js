import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import ArticleDetail from "./ArticleDetail";

const NewsItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .thumbnail {
    margin-right: 1rem;

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

    h2 {
      margin: 0;

      a {
        color: black;
        text-decoration: none;
        font-family: "Pretendard-SemiBold";
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
  }
`;

const ChevronIcon = styled(FontAwesomeIcon)`
  font-size: ${(props) => props.size};
`;

const NewsItem = ({ article, isFirstItem, differences, index }) => {
  console.log(differences);
  console.log(index);
  // props에 isFirstItem 추가
  const { title, thumbnail } = article;
  const [isVisible, setVisible] = useState(isFirstItem);

  const handleToggleContent = () => {
    setVisible(!isVisible);
  };

  const chevronIconSize = "1.3rem";

  return (
    <NewsItemBlock>
      <div style={{ display: "flex", alignItems: "center" }}>
        {
          <div className="thumbnail">
            <img src={thumbnail} alt="thumbnail" />
          </div>
        }
        <div className="contents">
          <h2>{title}</h2>
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
