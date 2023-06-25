import styled from "styled-components";

import Header from "../components/Intro/Header";
import Footer from "../components/Intro/Footer";
import IntroContent from "../components/Intro/IntroContent";

const Intro = () => {
  return (
    <IntroContainer>
      <Header />
      <IntroContent />
      <Footer />
    </IntroContainer>
  );
};

const IntroContainer = styled.div`
  width: 100%;
`;

export default Intro;
