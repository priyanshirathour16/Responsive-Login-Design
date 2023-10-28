import React from "react";
import styled from "styled-components";

const Input = ({ type, placeholder }) => {
  const StyleInput = styled.input`
    box-shadow: 0px 8px 32px 0 rgba(31, 38, 135, 0.37);
    border: none;
    outline: none;
    width: 80%;
    border-radius: 2rem;
    height: 3rem;
    padding: 1rem;
    font-size: 1.05rem;
    margin: 1rem;
    font-weight: 600;
    &:focus {
      display: inline-block;
      box-shadow: 0 0 0 0.2rem #9babe0;
    }
    &::placeholder {
      color: grey;
      opacity: 0.8;
    }
  `;
  return <StyleInput type={type} placeholder={placeholder}></StyleInput>;
};

export default Input;
