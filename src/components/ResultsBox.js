// url 검색 결과 화면
import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import ResultBoxContents from "./ResultBoxContents";
import axios from "axios";
import { useState } from "react";

const ResultsBox = ({ videoLink, videoInfo, detail, videoId }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleBoxClick = () => {
    setLoading(true);

    const linkData = { link: videoLink };

    axios
      .post(`${videoLink}/youtube/script/`, linkData)
      .then((response1) => {
        if (response1.status === 201) {
          const idData1 = { id: response1.data.id };
          return axios.post(`${videoLink}/youtube/keyword`, idData1);
        }
        throw new Error("유튜브 스크립트를 뽑아올 수 없는 영상임");
      })
      .then((response2) => {
        if (response2.status === 201) {
          const idData2 = { id: response2.data.id };
          return axios.post(`${videoLink}/news/`, idData2);
        }
        throw new Error("백엔드 코드 문제일듯,,");
      })
      .then((response3) => {
        if (response3.status === 201) {
          const idData3 = { id: response3.data.youtube };
          return axios.post(`${videoLink}/difference/`, idData3);
        }
        throw new Error("적당한 네이버 뉴스가 없는 것 or 백엔드 코드 문제");
      })
      .then((response4) => {
        if (response4.status !== 201) {
          throw new Error("백엔드 코드 문제일듯");
        }
        console.log("All POST requests were successful!");
      })
      .catch((err) => setError(err.message))
      .finally(() => {
        setLoading(false);
      });
  };
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
  var valid = false;

  if (
    (videoInfo.defaultLanguage !== "ko") &
    (videoInfo.defaultAudioLanguage !== "ko")
  ) {
    var validation = `한국어 영상만\n서비스 중입니다.`;
  } else if (duration > 20) {
    validation = `20분 이하의 영상만\n서비스 가능합니다.`;
  } else {
    validation = "해당 영상이 맞다면\n여기를 눌러주세요.";
    valid = true;
  }

  return (
    <>
      <ResultBox onClick={handleBoxClick}>
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
              state={{ videoLink: videoLink, videioInfo: videoInfo }}
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
