import React from "react";
import Header from "../components/Header";
import ResultsBox from "../components/ResultsBox";
import { useLocation } from "react-router-dom";
import { styled } from "styled-components";
import { motion } from "framer-motion";
import { Main } from "../styledComponents";
import Keyword from "../components/Detail/Keyword";

const DummyData = {
  summary:
    "9월부터 학부모가 교사와 면담을 원할 시 앱을 통해 약속을 잡고 일반적인 민원은 챗봇을 이용하는 등 학교 민원창구가 일원화된다.",
};

const Detail = () => {
  const location = useLocation();
  const videoLink = location.state.videioLink;
  const videoInfo = location.state.videioInfo;
  return (
    <motion.div
      initial={{ opacity: 2 }}
      animate={{ opacity: 2 }}
      exit={{ opacity: 2 }}
    >
      <Main>
        <DetailDiv>
          <DetailHeaderDiv>
            <Header margin="auto" font="25px" />
          </DetailHeaderDiv>{" "}
          <VideoBox>
            <ResultsBox
              videoLink={videoLink}
              videoInfo={videoInfo}
              detail={true}
            ></ResultsBox>
          </VideoBox>
          <DescriptionBox>
            <ResultTitleBig>위 영상을 요약해봤어요.</ResultTitleBig>
            <Description>{DummyData.summary}</Description>
          </DescriptionBox>
          <ArticleBox>
            <ResultTitleBig>
              키워드 별로 관련된 기사를 찾아봤어요.
            </ResultTitleBig>
            <KeywordDescription>키워드를 눌러주세요.</KeywordDescription>
            <Keyword />
          </ArticleBox>
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
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
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

const KeywordDescription = styled.h3`
  color: #b0b0b0;
  font-family: "Pretendard-SemiBold";
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-left: 20px;
  padding-top: 10px;
`;

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
