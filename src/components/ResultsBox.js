// url 검색 결과 화면
import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import ResultBoxContents from "./ResultBoxContents";

const ResultsBox = ({ videoLink, videoInfo, detail, videoId }) => {
  function convertToMinutes(input) {
    var reptms = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
    var hours = 0,
      minutes = 0,
      seconds = 0,
      totalseconds;

    if (reptms.test(input)) {
      var matches = reptms.exec(input);
      if (matches[1]) hours = Number(matches[1]);
      if (matches[2]) minutes = Number(matches[2]);
      if (matches[3]) seconds = Number(matches[3]);
      totalseconds = hours * 3600 + minutes * 60 + seconds;
    }

    return totalseconds / 60;
  }
  const duration = convertToMinutes(videoInfo.duration);
  var valid = true;
  var validation = "해당 영상이 맞다면\n여기를 눌러주세요.";

  if (duration > 20) {
    validation = `20분 이하의 영상만\n서비스 가능합니다.`;
    valid = false;
  }
  // if (
  //   (videoInfo.defaultLanguage !== "ko") &
  //   (videoInfo.defaultAudioLanguage !== "ko")
  // ) {
  //   var validation = `한국어 스크립트를\n지원하지 않는 영상입니다.`;
  // } else if (duration > 20) {
  //   validation = `20분 이하의 영상만\n서비스 가능합니다.`;
  // } else {
  //   validation = "해당 영상이 맞다면\n여기를 눌러주세요.";
  //   valid = true;
  // }

  return (
    <>
      <ResultBox>
        {valid ? (
          detail ? (
            <ResultBoxContents
              videoInfo={videoInfo}
              validation={validation}
              detail={detail}
            />
          ) : (
            <Link
              to={`/post/${videoId}`}
              state={{ videoLink: videoLink, videoInfo: videoInfo }}
              style={{ textDecoration: "none" }}
            >
              <ResultBoxContents
                videoInfo={videoInfo}
                validation={validation}
                detail={detail}
              />
            </Link>
          )
        ) : (
          <ResultBoxContents
            videoInfo={videoInfo}
            validation={validation}
            detail={detail}
          />
        )}
      </ResultBox>
    </>
  );
};

const ResultBox = styled.div`
  margin-top: 20px;
  border-radius: 10px;
  background: #404040;
  box-shadow: 0px 7px 40px 0px rgba(0, 0, 0, 0.25);
  height: 82px;
  width: 90%;
  text-decoration: none;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px);
  animation: fadeIn 0.5s ease forwards;
  transition: all 0.5s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
  }
`;

export default ResultsBox;
