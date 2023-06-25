import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <Text>멋쟁이사자처럼 2조 | 김성현, 김유이, 송경호, 신명준, 이선명</Text>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  width: 100%;
  padding-top: 10rem;
  padding-bottom: 3rem;
  font-family: Gmarket Sans TTF;
  font-size: 12px;
  text-align: right;
  background-color: #efefef;
  position: relaive;
`;

const Text = styled.div`
  color: #aaa;
  font-size: 1.2rem;
  position: relative;
  right: 50px;
`;

export default Footer;
