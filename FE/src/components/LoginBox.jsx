import styled from "styled-components";
import { palette } from "../style/palette";

import { useNavigate } from "react-router-dom";

const LoginBox = () => {
  const nav = useNavigate();
  const goMain = () => {
    nav("/main");
  };

  return (
    <LoginBoxContainer>
      YouMap Login
      <Input />
      <Input />
      <LoginButton onClick={goMain}>로그인</LoginButton>
    </LoginBoxContainer>
  );
};

const LoginBoxContainer = styled.div`
  width: 350px;
  padding: 30px 0;
  text-align: center;
  background-color: white;
  border-radius: 10px;
`;

const Input = styled.input`
  display: block;
  width: 65%;
  margin: 20px auto;
  padding: 5px;
  border: 2px solid ${palette.brand_lv4};
  border-radius: 10px;
`;

const LoginButton = styled.button`
  background-color: ${palette.brand_lv4};
  color: white;
  width: 65%;
  padding: 5px;
  border-radius: 10px;
`;

export default LoginBox;
