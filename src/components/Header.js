import HeaderTitle from "./HeaderTitle";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = ({ margin, font }) => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };

  return (
    <>
      <HeaderDiv>
        <HeaderTitle goHome={goHome} margin={margin} font={font} />
      </HeaderDiv>
    </>
  );
};

const HeaderDiv = styled.div`
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export default Header;
