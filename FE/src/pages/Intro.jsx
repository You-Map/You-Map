import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";
import IntroContent from "../components/IntroContent";

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
