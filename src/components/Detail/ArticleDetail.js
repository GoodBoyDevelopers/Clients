// Article.js

import React from "react";
import { useState } from "react";

const ArticleDetail = () => {
  const [activeMenu, setActiveMenu] = useState("summary");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };
  return (
    <div>
      <div className="menu-line">
        <div
          className={`menu-button ${activeMenu === "summary" ? "active" : ""}`}
          onClick={() => handleMenuClick("summary")}
          style={{ textAlign: "center" }}
        >
          기사 요약
        </div>
        <div
          className={`menu-button ${
            activeMenu === "comparison" ? "active" : ""
          }`}
          onClick={() => handleMenuClick("comparison")}
          style={{ textAlign: "center" }}
        >
          영상과 비교
        </div>
      </div>
      <div className="menu-content">
        {activeMenu === "summary" && <p>기사요약</p>}
        {activeMenu === "comparison" && <p>영상과 비교</p>}
      </div>
      <style>
        {`
        .menu-line {
          display: flex;
          justify-content: sapce-around;
          align-items: center;
          margin-bottom: 1rem;
        }

        .menu-button {
          flex: 1;
          padding: 0.5rem 1rem;
          margin: 0 0.5rem;
          border: none;
          cursor: pointer;
          font-weight: bold;
          color: #333;
        }

        .menu-button.active {
          border-bottom: 2px solid black;
        }

        .menu-content {
          text-align: center;
        }
      `}
      </style>
    </div>
  );
};

export default ArticleDetail;
