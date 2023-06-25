import styled from "styled-components";

import MapSrc from "../../assets/sogang_map.png";

import {
  faBed,
  faBookOpen,
  faUsers,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MainMap = () => {
  return (
    <MapContainer>
      <ButtonContainer>
        <ContentButton>
          <FontAwesomeIcon icon={faBed} />
          휴게
        </ContentButton>
        <ContentButton>
          <FontAwesomeIcon icon={faBookOpen} />
          공부
        </ContentButton>
        <ContentButton>
          <FontAwesomeIcon icon={faUsers} />
          팀플
        </ContentButton>
        <ContentButton>
          <FontAwesomeIcon icon={faMapLocationDot} />
          경로
        </ContentButton>
      </ButtonContainer>
    </MapContainer>
  );
};

const MapContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${MapSrc}) center no-repeat;
  background-size: cover;

  position: relative;
`;

const ButtonContainer = styled.div`
  margin-left: auto;
  width: fit-content;
  padding: 30px;
  // background-color: white;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ContentButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 2rem auto 0;
  width: 194px;
  height: 69px;
  flex-shrink: 0;
  border-radius: 44px;
  background: #fff;
  box-shadow: 0px 7px 29px 0px rgba(100, 100, 111, 0.2);
  border-style: none;
  color: #3c6255;
  font-size: 24px;
  font-family: Gmarket Sans TTF;
  font-weight: 500;
`;

export default MainMap;
