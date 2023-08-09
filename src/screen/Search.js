import { useState, useEffect } from "react";
import axios from "axios";
import ResultsBox from "../components/ResultsBox";
import Header from "../components/Header";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { Main } from "../styledComponents";

const Search = () => {
  const [videoLink, setVideoLink] = useState("");
  const [videoInfo, setVideoInfo] = useState(null);

  const [buttonText, setButtonText] = useState(
    "YouTube 링크를 복사한 후 여기를 눌러주세요."
  );
  const [isValidLink, setIsValidLink] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handlePaste = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      setButtonText(clipboardText);
      setVideoLink(clipboardText); // Update the videoLink state
      setButtonClicked(true);
    } catch (error) {
      console.error("Error reading clipboard:", error);
    }
  };

  useEffect(() => {
    const fetchVideoInfo = async () => {
      try {
        const videoId = extractVideoId(videoLink);
        if (videoId) {
          const response = await axios.get(
            `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${process.env.REACT_APP_API_KEY}`
          );
          const response2 = await axios.get(
            `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${videoId}&key=${process.env.REACT_APP_API_KEY}`
          );

          const videoInfo = response.data.items[0]?.snippet;
          const videoInfo2 = response2.data.items[0]?.contentDetails;
          Object.assign(videoInfo, videoInfo2);

          setVideoInfo(videoInfo);
          setIsValidLink(true);
        } else {
          setIsValidLink(false);
        }
      } catch (error) {
        console.error("Error fetching video info:", error);
        setVideoInfo(null);
        setIsValidLink(false);
      }
    };

    fetchVideoInfo();
  }, [videoLink]);

  const extractVideoId = (link) => {
    const match = link.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([^&?]+)/
    );
    if (match) {
      return match[1];
    } else {
      return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
    >
      <Main>
        <SearchHeaderDiv>
          <Header />
        </SearchHeaderDiv>
        <SearchSection>
          <UrlInput type="url" onClick={handlePaste}>
            {buttonText}
          </UrlInput>
          {isValidLink ? (
            <ResultsBox
              videoLink={videoLink}
              videoInfo={videoInfo}
              detail={false}
            />
          ) : buttonClicked ? (
            <NotValidLink>
              <FontAwesomeIcon icon={faExclamationTriangle} color="#FFA800" />
              유효하지 않은 링크입니다.
            </NotValidLink>
          ) : null}
        </SearchSection>
      </Main>
    </motion.div>
  );
};

const UrlInput = styled.button`
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 7px 40px 0px rgba(0, 0, 0, 0.15);
  height: 48px;
  width: 90%;
  border: none;
  padding: 10px 12px;
  font-size: 15px;
  color: #b0b0b0;
  font-family: "Pretendard-SemiBold";
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const SearchHeaderDiv = styled.div`
  padding-top: 150px;
`;

const NotValidLink = styled.div`
  margin-top: 15px;
  border-radius: 20px;
  background: #404040;
  box-shadow: 0px 7px 40px 0px rgba(0, 0, 0, 0.25);
  width: 170px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  color: #fff;
  font-family: "Pretendard-Regular";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px);
  animation: fadeIn 1s ease forwards;
  animation-delay: 1s;
  @keyframes fadeIn {
    to {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
  }
`;

const SearchSection = styled.div`
  margin-top: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Search;
