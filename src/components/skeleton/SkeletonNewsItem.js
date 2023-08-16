import React, { useState } from "react";
import { styled } from "styled-components";
import SkeletonItem from "./SkeletonItem";
import SkeletonImg from "./SkeletonImg";
import SkeletonTitle from "./SkeletonTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const NewsItemBlock = styled(SkeletonItem)`
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
      font-family: "Pretendard-SemiBold";
      margin-right: 8px;
      font-size: 15px;

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

const SkeletonNewsItem = () => {
  const [isVisible, setVisible] = useState();

  const handleToggleContent = () => {
    setVisible(!isVisible);
  };

  const chevronIconSize = "1.3rem";

  return (
    <NewsItemBlock>
      <div style={{ display: "flex", alignItems: "center" }}>
        {
          <div className="thumbnail">
            <SkeletonImg />
          </div>
        }
        <div className="contents">
          <SkeletonTitle />
        </div>
        <button className="toggle-button" onClick={handleToggleContent}>
          {isVisible ? (
            <FontAwesomeIcon icon={faChevronUp} size={chevronIconSize} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} size={chevronIconSize} />
          )}
        </button>
      </div>
      <div className="article-details-container">
        <SkeletonTitle />
      </div>
    </NewsItemBlock>
  );
};

export default SkeletonNewsItem;
