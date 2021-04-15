import styled, { keyframes } from 'styled-components';
import { theme, device } from '../theme';

const Scatter = keyframes`
  0% { top: 0; }
  50% { top: -10px; }
  100% { top: 0; }
`;

export const Page = styled.div`
  max-width: 1440px;
  ${device.tablet} {
    margin: 0 10vw;
  }
  ${device.desktop} {
    width: 1440px;
    margin: auto;
  }
`;

export const Hero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  position: relative;
  color: white;
  border: 2px solid red;

  ${device.tablet} {
    border: 2px solid orange;
  }
  ${device.laptop} {
    border: 2px solid yellow;
  }
  ${device.desktop} {
    border: 2px solid green;
  }
`;

export const Balloon = styled.div`
  position: absolute;
  animation: ${Scatter} 2.5s infinite;
  margin: 2rem 1.5rem 0;
  left: 0;
`;

export const Contact = styled.div`
  align-self: flex-end;
  background-color: ${theme.color.sunnyYellow};
  width: fit-content;
  padding: 1rem;
  border-radius: 3rem;
  box-shadow: -1px 4px 6px ${theme.color.textShadow};
  color: rgba(0, 0, 0, 0.65);
  margin: 1.5rem;
`;

export const Content = styled.div`
  margin-top: 10%;
  font-family: ${theme.font.georgiaBold};
  padding: 0px 2.5rem;
  z-index: 1;
  /* border: 2px solid cyan; */
  max-width: 30rem;
`;

export const Title = styled.p`
  position: relative;
  font-size: 64px;
  text-align: center;
  text-shadow: -2px 2px 0px ${theme.color.textShadow};
  padding-bottom: 4rem;
`;

export const Text = styled.p`
  font-size: 20px;
  text-shadow: 0px 2px 4px ${theme.color.textShadow};
  line-height: 1.25;
`;

export const ImgWrapper = styled.div`
  position: relative;
  left: 25vw;
  ${device.tablet} {
    position: absolute;
    left: auto;
    right: 0;
    bottom: 40%;
    z-index: 10;
  }
  ${device.laptop} {
    bottom: 30vh;
    margin-right: 8vw;
  }
`;

export const Img = styled.img`
  position: relative;
  animation: ${Scatter} 1.75s infinite;
  animation-delay: 0.22s;
  ${device.laptop} {
    width: 18rem;
  }
`;

export const Cloud = styled.img`
  position: absolute;
  width: 100%;
  bottom: -6rem;
  ${device.tablet} {
    display: none;
  }
`;
export const CloudsWrapper = styled.div`
  display: none;
  ${device.tablet} {
    display: flex;
    position: absolute;
    width: 150%;
    justify-content: space-between;
    bottom: -5vh;
  }
  ${device.laptop} {
    width: 130%;
    bottom: -12vh;
  }
`;

export const Clouds = styled.img`
  max-width: 45%;
  ${device.laptop} {
    max-width: 40%;
  }
`;
