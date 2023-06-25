import styled from "styled-components";

import {
  faBed,
  faBookOpen,
  faUsers,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PlaceBox = (props) => {
  const { title, purpose, location } = props.data;
  console.log(purpose);
  return (
    <PlaceBoxContainer>
      <PlaceBoxImage />
      { purpose === 1 ? (
        <>
          <PlacePurpose>
            <FontAwesomeIcon icon={faBed} />
            휴게
          </PlacePurpose>
        </>
      ) : (
        <></>
      )}
      { purpose  === 2 ? (
        <>
          <PlacePurpose>
            <FontAwesomeIcon icon={faBookOpen} />
            공부
          </PlacePurpose>
        </>
      ) : (
        <></>
      )}
      {{ purpose } === "3" ? (
        <>
          <PlacePurpose>
            <FontAwesomeIcon icon={faUsers} />
            {purpose}
          </PlacePurpose>
        </>
      ) : (
        <></>
      )}
      {{ purpose } === "경로" ? (
        <>
          <PlacePurpose>
            <FontAwesomeIcon icon={faMapLocationDot} />
            {purpose}
          </PlacePurpose>
        </>
      ) : (
        <></>
      )}
      <PlaceTitle>{title}</PlaceTitle>
      <PlaceLoctaion>정하산관</PlaceLoctaion>
    </PlaceBoxContainer>
  );
};

const PlaceBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 25%;
`;

const PlaceBoxImage = styled.div`
  width: 100%;
  height: 25rem;
  background-color: #ddd;
`;

const PlacePurpose = styled.div`
  display: flex;
  gap: 10px;
  color: #3c6255;
  font-size: 16px;
  font-family: Gmarket Sans TTF;
  font-weight: 500;
  padding: 10px 8px 8px 3px;
`;

const PlaceTitle = styled.div`
  display: flex;
  color: #3c6255;
  font-size: 24px;
  font-family: Gmarket Sans TTF;
  font-weight: 500;
  padding: 5px 5px 5px 0px;
`;

const PlaceLoctaion = styled.div`
  display: flex;
  color: #999;
  font-size: 1px;
  font-family: Gmarket Sans TTF;
  font-weight: 500;
  padding: 0px 5px 5px 0px;
`;

export default PlaceBox;
