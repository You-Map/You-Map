import React from "react";
import styled from "styled-components";

const MainSidebar = () => {
  return (
    <MainSidebarContainer>
      <ApplicationButton>휴게</ApplicationButton>
      <ApplicationButton>팀플</ApplicationButton>
      <ApplicationButton>공부</ApplicationButton>
      <ApplicationButton>경로 찾기</ApplicationButton>
    </MainSidebarContainer>
  );
};

const MainSidebarContainer = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
`;

const ApplicationButton = styled.button``;

export default MainSidebar;
