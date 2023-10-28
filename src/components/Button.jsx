import React from "react";
import styled from "styled-components";

const Button = () => {
  const ButtonContent = styled.button`
    width: 80%;
    height: 3rem;
    background: linear-gradient(to right, #324aa8 0%, #0995e6 79%);
    border: none;
    color: #fff;
    font-size: 1.2rem;
    padding: 0.6rem;
    font-weight: 500;
    border-radius: 1.5rem;
    cursor: pointer;
  `;
  return (
    <>
      <ButtonContent>Sign In</ButtonContent>
    </>
  );
};

export default Button;
