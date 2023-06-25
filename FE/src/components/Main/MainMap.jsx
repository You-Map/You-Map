import styled from "styled-components";

import MapSrc from "../../assets/sogang_map.png";

const MainMap = () => {
  return (
    <MapContainer>
      <ButtonContainer>
        <ContentButton>a</ContentButton>
        <ContentButton>a</ContentButton>
        <ContentButton>a</ContentButton>
        <ContentButton>a</ContentButton>
      </ButtonContainer>
    </MapContainer>
  );
};

const MapContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${MapSrc}) center no-repeat;
  background-size: 100%;

  position: relative;
`;

const ButtonContainer = styled.div`
  margin-left: auto;
  width: 10%;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const ContentButton = styled.button`
  width: 5px;
`;

export default MainMap;
