import styled from "styled-components";
import MainMap from "../components/Main/MainMap";
import MainSidebar from "../components/Main/MainSidebar";

const Main = () => {
  return (
    <MainContainer>
      <MainMap />
      {/* <MainSidebar /> */}
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default Main;
