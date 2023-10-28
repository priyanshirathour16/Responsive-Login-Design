import React from "react";
import styled from "styled-components";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Icon = ({ color, children }) => {
  const IconStyle = styled.div`
    height: 3.5rem;
    width: 3.5rem;
    display: flex;
    justify-content: center;
    align-item: center;
    border-radius: 4rem;
    color: white;
    cursor: pointer;
    background: ${(props) => props.background};
    svg {
      margin-top: 1rem;
      width: 1.5rem;
      height: 1.5rem;
    }
  `;
  return (
    <>
      <IconStyle background={color}>{children}</IconStyle>
    </>
  );
};

export default Icon;
