import React from "react";
import styled, { keyframes } from "styled-components";

const PoppingCircle = ({ size, color }) => {
  return <Popper style={{ width: size, height: size, background: color }} />;
};

const turnBlue = keyframes`
  from {
    color: inherit;
  }
  to {
    color: blue;
  }
`;

const scaleIn = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Popper = styled.div`
  border-radius: 50%;
  animation: ${turnBlue} ease-in 500ms forwards,
    ${scaleIn} 300ms cubic-bezier(0.44, 0.11, 0.93, 0.72) forwards,
    ${fadeIn} 500ms ease-in forwards;
`;

export default PoppingCircle;
