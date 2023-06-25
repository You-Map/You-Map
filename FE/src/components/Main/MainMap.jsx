import styled from "styled-components";

import MapImageUrl from "../../assets/sogang_map.png";

const MainMap = () => {
  return <MapContainer></MapContainer>;
};

const MapContainer = styled.div`
  width: 100%;
  background-image: url(${MapImageUrl});
`;

export default MainMap;
