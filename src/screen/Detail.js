import React from "react";
import Header from "../components/Header";
import ResultsBox from "../components/ResultsBox";
import { useLocation } from "react-router-dom";
import { styled } from "styled-components";
import { motion } from "framer-motion";
import { Main } from "../styledComponents";
import Keyword from "../components/Detail/Keyword";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import SkeletonSummary from "../components/skeleton/SkeletonSummary";
import NewsList from "../components/Detail/NewsList";

// const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const BASE_URL = "https://port-0-you-check-ac2nllazbxp3.sel3.cloudtype.app/";

const Detail = () => {
  const location = useLocation();
  const videoLink = location.state.videoLink;
  const videoInfo = location.state.videoInfo;

  // 화면에 나타낼 데이터 변수들 useState로 설정 => 이것들이 초깃값일 때 loading 화면 띄워주고 아니면 data 보여주면 됨
  const [scriptResponse, setScriptResponse] = useState(null);
  const [keywordResponse, setKeywordResponse] = useState([]);
  const [summaryResponse, setSummaryResponse] = useState(null);
  const [newsResponse, setNewsResponse] = useState(null);
  const [differenceResponse, setDifferenceResponse] = useState([]);

  useEffect(() => {
    const linkData = { link: videoLink };
    const idData1 = {};
    const newsData = {};

    axios
      .post(`${BASE_URL}/youtube/script/`, linkData)
      .then((response1) => {
        // console.log(response1.message);
        if (response1.status === 201) {
          // console.log(response1);
          setScriptResponse(response1.data);
          idData1.id = response1.data.id;
          newsData.youtube_id = response1.data.id;
          return axios.post(`${BASE_URL}/youtube/keyword/`, idData1);
        }
        throw new Error("유튜브 스크립트를 뽑아올 수 없는 영상임");
      })
      .then((response2) => {
        if (response2.status === 201) {
          // console.log(response2);
          setSummaryResponse(response2.data.summary);
          setKeywordResponse(response2.data.keywords);
          const idData2 = { id: response2.data.id };
          return axios.post(`${BASE_URL}/news/`, idData2);
        }
        throw new Error("백엔드 코드 문제일듯,,");
      })
      .then((response3) => {
        if (response3.status === 201) {
          // console.log(response3);
          setNewsResponse(response3.data);
          //const idData3 = { id: response3.data.youtube };
          return Promise.all(
            response3.data.map((newsItem) => {
              newsData.article_id = newsItem.id;
              // console.log(newsData);
              return axios.post(`${BASE_URL}/difference/`, newsData);
            })
          );
        } else if (response3.status === 204) {
          setNewsResponse(0);
          // console.log("No news found for the video");
          return;
        }
        throw new Error("적당한 네이버 뉴스가 없는 것 or 백엔드 코드 문제");
      })
      .then((response4) => {
        if (!response4) {
          return;
        }
        // console.log(response4);
        const differenceData = response4.map((response4) => response4.data);
        setDifferenceResponse(differenceData);
        if (response4.status !== 201) {
          throw new Error("백엔드 코드 문제일듯");
        }
        // console.log("All POST requests were successful!");
      })
      .catch((err) => {
        if (err.response && err.response.status === 400) {
          console.log(err.response);
          setScriptResponse(0);
          // console.log("error");
          return;
        }
      })
      .finally(() => {});
  }, []);
  return (
    <motion.div
      initial={{ opacity: 2 }}
      animate={{ opacity: 2 }}
      exit={{ opacity: 2 }}
    >
      <Main>
        <DetailDiv>
          <DetailHeaderDiv>
            <Header margin="auto" width="158px" height="30px" />
          </DetailHeaderDiv>{" "}
          <VideoBox>
            <ResultsBox videoInfo={videoInfo} detail={true}></ResultsBox>
          </VideoBox>
          {scriptResponse === null ? (
            <DescriptionBox>
              <ResultTitleBig>위 영상을 요약중입니다.</ResultTitleBig>
              <Description>
                {summaryResponse}
                {!summaryResponse && <SkeletonSummary />}
              </Description>
            </DescriptionBox>
          ) : scriptResponse === 0 ? (
            <DescriptionBox>
              <ResultTitleBig>영상 요약을 할 수 없습니다.</ResultTitleBig>
            </DescriptionBox>
          ) : (
            <>
              <DescriptionBox>
                <ResultTitleBig>위 영상을 요약해봤어요.</ResultTitleBig>
                <Description>
                  {summaryResponse}
                  {!summaryResponse && <SkeletonSummary />}
                </Description>
              </DescriptionBox>
              {newsResponse ? (
                <ArticleBox>
                  <ResultTitleBig>
                    영상과 관련된 기사를 찾아봤어요.
                  </ResultTitleBig>
                  {/* <KeywordDescription>키워드를 눌러주세요.</KeywordDescription> */}
                  <Keyword keywords={keywordResponse} />
                  <NewsList
                    news={newsResponse}
                    differences={differenceResponse || []}
                  />
                </ArticleBox>
              ) : newsResponse === null ? (
                <ArticleBox>
                  <ResultTitleBig>
                    영상과 관련된 기사를 찾는 중입니다.
                  </ResultTitleBig>
                  <Keyword keywords={keywordResponse} />
                  <SkeletonSummary />
                  <SkeletonSummary />
                  <SkeletonSummary />
                </ArticleBox>
              ) : (
                <ArticleBox>
                  <ResultTitleBig>
                    영상과 관련된 기사를 찾지 못했습니다.
                  </ResultTitleBig>
                  <Keyword keywords={keywordResponse} />
                </ArticleBox>
              )}
            </>
          )}
        </DetailDiv>
      </Main>
    </motion.div>
  );
};

const DescriptionBox = styled.div`
  margin-top: 20px;
  padding-right: 20px;
`;

const Description = styled.div`
  margin-left: 20px;
  color: #000;
  font-family: "Pretendard-Regular";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  padding-top: 10px;
`;

const DetailHeaderDiv = styled.div`
  width: 90%;
  padding-left: 20px;
  padding-top: 15px;
`;

const DetailDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

// const KeywordDescription = styled.h3`
//   color: #b0b0b0;
//   font-family: "Pretendard-SemiBold";
//   font-size: 12px;
//   font-style: normal;
//   font-weight: 600;
//   line-height: normal;
//   padding-left: 20px;
//   padding-top: 10px;
// `;

const ArticleBox = styled.div`
  margin-top: 20px;
`;

const VideoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ResultTitleBig = styled.div`
  margin-left: 20px;
  color: #000;
  font-family: "Pretendard-SemiBold";
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-top: 30px;
`;

export default Detail;
