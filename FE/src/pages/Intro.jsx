import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Intro = () => {
  return (
    <IntroContainer>
      <Header />
      <Footer />
    </IntroContainer>
  );
};

const IntroContainer = styled.div`
  width: 100%;
`;

export default Intro;
