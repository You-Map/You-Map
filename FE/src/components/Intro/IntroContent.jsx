import styled from "styled-components";

const IntroContent = () => {
  return (
    <IntroContentContainer>
      <IntroContentTitle>
        <h1>YouMap</h1>
        <h2>너를 위한 지도</h2>
      </IntroContentTitle>
      <IntroContentDescription>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
        <br />
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s,
        <br />
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. <br />
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially
      </IntroContentDescription>
    </IntroContentContainer>
  );
};

const IntroContentContainer = styled.div`
  width: 100%;
`;

const IntroContentTitle = styled.div`
  margin: 5rem auto;
`;

const IntroContentDescription = styled.p``;

export default IntroContent;
