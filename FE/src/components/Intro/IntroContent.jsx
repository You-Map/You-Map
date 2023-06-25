import styled from "styled-components";

const IntroContent = () => {
  return (
    <IntroContentContainer>
      <IntroContentTitle>
        <h2>너를 위한 지도</h2>
        <h1>YouMap</h1>
      </IntroContentTitle>
      <IntroContentDescription>
        학교에서 혼자 공부할 때, 팀플할 때, 휴식하고 싶을 때 <br />
        알맞은 장소를 유맵에서 찾아보세요.
      </IntroContentDescription>
    </IntroContentContainer>
  );
};

const IntroContentContainer = styled.div`
  width: 100%;
`;

const IntroContentTitle = styled.div`

  margin: 20rem auto 0;
  margin-left: 10rem;
  font-family: Gmarket Sans TTF;
  h1 {
    margin: 2rem auto;
    color: #3c6255;
    font-size: 120px;
    font-weight: 700;
  }
  h2 {
    color: #3c6255;
    font-size: 40px;
    font-weight: 500;
  }
`;

const IntroContentDescription = styled.p`
  margin: 3rem auto 5rem;
  margin-left: 10rem;
  color: #3c6255;
  font-size: 18px;
  font-family: Gmarket Sans TTF;
  font-weight: 500;
  line-height: 21px;
`;

export default IntroContent;
