import styled from "styled-components";
import { palette } from "../../style/palette";

import Modal from "../Modal/Modal";
import LoginBox from "../LoginBox";

import useModal from "../Modal/useModal";

const Header = () => {
  const [isOpen, toggleModal] = useModal();

  return (
    <HeaderContainer>
      <HeaderLogo>YouMap</HeaderLogo>
      <HeaderButton onClick={toggleModal}>Get Started</HeaderButton>

      <Modal state={isOpen} toggleModal={toggleModal}>
        <LoginBox />
      </Modal>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  height: 6rem;
  background-color: ${palette.brand_lv1};

  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLogo = styled.div`
  color: ${palette.brand_lv4};
  font-size: 2rem;
  font-weight: 900;
  font-family: Impact;
  letter-spacing: 2px;

  margin-left: 2rem;
`;

const HeaderButton = styled.button`
  background-color: ${palette.brand_lv4};
  color: white;
  font-family: Impact;
  letter-spacing: 2px;

  margin-right: 2rem;
  border: none;
  border-radius: 999px;
  padding: 1rem;
  width: 12rem;
`;

export default Header;
