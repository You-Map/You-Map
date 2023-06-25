import styled from "styled-components";

const PlaceBox = (props) => {
  const { title, purpose, location } = props.data;
  return (
    <PlaceBoxContainer>
      <PlaceBoxImage />
      <PlacePurpose>{purpose}</PlacePurpose>
      <PlaceTitle>{title}</PlaceTitle>
      <PlaceLoctaion>{location}</PlaceLoctaion>
    </PlaceBoxContainer>
  );
};

const PlaceBoxContainer = styled.div`
  width: 25%;
`;

const PlaceBoxImage = styled.div`
  width: 100%;
  height: 2rem;
  background-color: #ddd;
`;

const PlacePurpose = styled.div``;

const PlaceTitle = styled.div``;

const PlaceLoctaion = styled.div``;

export default PlaceBox;
