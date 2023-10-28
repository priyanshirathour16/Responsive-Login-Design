import React from "react";
import styled from "styled-components";
import Input from "./components/Input";
import Button from "./components/Button";
import Icon from "./components/Icon";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const App = () => {
  const FacebookBackground =
    "linear-gradient(to right, #4267B2 0%, #663FB6 100%)";
  const InstagramBackground =
    "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
  const TwitterBackground =
    "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";
  const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80vh;
    width: 30vw;
    background: rgba(255, 224, 225, 0.15);
    box-shadow: 0px 8px 32px 0 rgba(31, 38, 135, 0.37);
    border-radius: 10px;
    color: #000;

    @media (min-width: 280px) {
      width: 90vw;
      height: 90vh;
    }

    @media (min-width: 414px) {
      width: 80vw;
      height: 90vh;
    }
    @media only screen and(min-width: 768px) {
      width: 80vw;
      height: 90vh;
    }
    @media (min-width: 820px) {
      width: 80vw;
      height: 90vh;
    }
    @media (min-width: 912px) {
      width: 80vw;
      height: 60vh;
    }
    @media (min-width: 1024px) {
      width: 30vw;
      height: 90vh;
    }
  `;

  const LoginStyle = styled.h2`
    display: flex;
    justify-content: center;
    font-size: 2.5rem;
    margin: 3rem 0;
  `;
  const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 20%;
    width: 100%;
  `;

  const ButtonContainer = styled.div`
    margin: 2.5rem 0 2rem 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  const Loginwith = styled.p`
    cursor: pointer;
    font-weight: 600;
  `;

  const HorizontalLine = styled.hr`
    width: 90%;
    height: 0.3rem;
    border-radius: 0.8rem;
    border: none;
    margin: 1.5em 0 1rem 0;
    background: linear-gradient(to right, #324aa8 0%, #0995e6 79%);
    backdrop-filter: blur(25px);
  `;

  const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 1rem 0 1rem 0;
    width: 80%;
  `;

  const ForgetContainer = styled.p`
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1rem;
  `;
  return (
    <MainContainer>
      <LoginStyle> WELCOME </LoginStyle>
      <InputContainer>
        <Input type="text" placeholder="john@example.com" />
        <Input type="password" placeholder="password" />
      </InputContainer>
      <ButtonContainer>
        <Button />
      </ButtonContainer>
      <Loginwith> Or Login With </Loginwith>
      <HorizontalLine />
      <IconContainer>
        <Icon color={FacebookBackground}>
          <FaFacebookF />
        </Icon>
        <Icon color={InstagramBackground}>
          <FaInstagram />
        </Icon>
        <Icon color={TwitterBackground}>
          <FaTwitter />
        </Icon>
      </IconContainer>
      <ForgetContainer>Forget Password ?</ForgetContainer>
    </MainContainer>
  );
};

export default App;
