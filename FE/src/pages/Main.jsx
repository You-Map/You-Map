import styled from "styled-components";
import MainMap from "../components/Main/MainMap";
import MainSidebar from "../components/Main/MainSidebar";

const Main = () => {
  return (
    <MainContainer>
      Hello
      <MainMap />
      <MainSidebar />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100%;
`;

export default Main;
