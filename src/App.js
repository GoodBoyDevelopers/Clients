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
          <Route path="/post/:channelID" element={<Detail />}></Route>
        </Routes>
      </MediaDiv>
    </>
  );
};

const MediaDiv = styled.div`
  margin: 0px auto;
  min-height: 100vh;
  width: 500px;
  color: #2c2c2c;
  background-color: white;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export default App;
