import React from "react";
import { styled } from "styled-components";

const ResultBoxContents = ({ videoInfo, detail, validation }) => {
  return (
    <SResultBoxContents>
      <ResultBoxImg
        component="img"
        height="140"
        src={videoInfo.thumbnails.medium.url}
        alt="video thumbnail"
      />
      <ResultBoxText>
        <ResultBoxTitle variant="body2" color="text.secondary">
          {detail ? videoInfo.channelTitle : videoInfo.title}
        </ResultBoxTitle>
        <ResultBoxNotice>
          {detail ? videoInfo.title : validation}
        </ResultBoxNotice>
      </ResultBoxText>
    </SResultBoxContents>
  );
};

const SResultBoxContents = styled.div`
  padding: 12px 15px;
  display: flex;
  flex-direction: row;
`;

const ResultBoxImg = styled.img`
  width: 103px;
  height: 58px;
  border-radius: 5px;
`;

const ResultBoxText = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  text-overflow: ellipsis;
  /* white-space: nowrap; */
  overflow: hidden;
`;

const ResultBoxTitle = styled.h2`
  color: #b0b0b0;
  font-family: "Pretendard-SemiBold";
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const ResultBoxNotice = styled.h1`
  padding-top: 3px;
  color: #fff;
  font-family: "Pretendard-SemiBold";
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  word-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  width: 100%;
`;

export default ResultBoxContents;
