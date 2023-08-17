import React from "react";
import { GlobalStyles } from "./styles";
import { Routes, Route } from "react-router-dom";
import Search from "./screen/Search";
import Detail from "./screen/Detail";
import styled from "styled-components";

export const APIURL = process.env.REACT_APP_APIURL;

const App = () => {
  return (
    <>
      {/* Global Styling */}
      <GlobalStyles />
      <MediaDiv>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Search />}></Route>
          <Route path="/post/:videoId" element={<Detail />}></Route>
        </Routes>
      </MediaDiv>
    </>
  );
};

const MediaDiv = styled.div`
  margin: 0px auto;
  min-height: 100vh;
  width: 700px;
  color: #2c2c2c;
  background-color: white;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export default App;
