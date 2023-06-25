import styled from "styled-components";

const Footer = () => {

  return (
    <FooterContainer>
      멋쟁이사자처럼 2조 | 김성현, 김유이, 송경호, 신명준, 이선명
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  width: 100%;

  margin-top: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Gmarket Sans TTF;
  font-size: 12px;
`;

export default Footer;
