import styled from "styled-components";
import { palette } from "../style/palette";

import { useNavigate } from "react-router-dom";

import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoginBox = () => {
  const nav = useNavigate();
  const goMain = () => {
    nav("/main");
  };

  return (
    <LoginBoxContainer>
      <LoginLogo>
        <FontAwesomeIcon icon={faLocationDot} />
        YouMap Login
      </LoginLogo>
      <Input placeholder=" ID" />
      <Input placeholder=" Password" />
      <LoginButton onClick={goMain}>로그인</LoginButton>
    </LoginBoxContainer>
  );
};

const LoginLogo = styled.div`
  margin: 0 auto;

  color: ${palette.brand_lv4};
  font-size: 1.3rem;
  letter-spacing: 1px;
`;

const LoginBoxContainer = styled.div`
  width: 350px;
  padding: 30px 0;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  font-family: Gmarket Sans TTF;
`;

const Input = styled.input`
  display: block;
  width: 65%;
  margin: 20px auto;
  padding: 5px;
  border: 2px solid ${palette.brand_lv4};
  border-radius: 10px;
  font-family: Gmarket Sans TTF;
`;

const LoginButton = styled.button`
  background-color: ${palette.brand_lv4};
  color: white;
  width: 65%;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0px 7px 29px 0px rgba(100, 100, 111, 0.2);
  border-style: none;
  font-family: Gmarket Sans TTF;

  &:hover {
    opacity: 70%;
    cursor: pointer;
  }
`;

export default LoginBox;
