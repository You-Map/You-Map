import styled from "styled-components";

import { palette } from "../style/palette";

const NotFound = () => {
  return (
    <NotfoundContainer>
      <NotFoundText>404 NotFound</NotFoundText>
    </NotfoundContainer>
  );
};

const NotfoundContainer = styled.div`
  height: 100vh;
`;

const NotFoundText = styled.h1`
  color: ${palette.brand_lv4};
  font-family: Impact;
  font-size: 10rem;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default NotFound;
