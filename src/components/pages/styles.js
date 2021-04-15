import styled, { keyframes } from 'styled-components';
import { theme, device } from '../theme';

export const Hero = styled.section`
  display: flex;
  flex-direction: column;
  align-content: center;
  height: 100vh;
  position: relative;
  color: white;
  border: 2px solid red;

  /* ${device.tablet} {
    justify-content: flex-start;
    margin: 0 0 2rem 3rem;
  } */
`;

export const Content = styled.div`
  margin-top: 10%;
  font-family: ${theme.font.georgiaBold};
  padding: 0px 2.5rem;
  z-index: 1;
`;

export const Title = styled.p`
  font-size: 64px;
  text-align: center;
  text-shadow: -2px 2px 0px ${theme.color.textShadow};
  position: relative;
  padding-bottom: 4rem;
`;

export const Text = styled.p`
  font-size: 20px;
  text-shadow: 0px 2px 4px ${theme.color.textShadow};
  line-height: 1.25;
`;

const Scatter = keyframes`
  0% { top: 0; }
  50% { top: -10px; }
  100% { top: 0; }
`;

export const Img = styled.img`
  position: relative;
  width: 35%;
  left: 55vw;
  animation: ${Scatter} 1.75s infinite;
  animation-delay: 0.22s;
`;

export const Clouds = styled.img`
  position: absolute;
  width: 100%;
  bottom: -6rem;
`;
