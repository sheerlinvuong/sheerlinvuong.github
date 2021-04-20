import styled from 'styled-components';
import { theme, device } from '../theme';
import {
  Frame,
  SubTitle as globalSubtitle,
  Title as globalTitle
} from '../pages/styles';

export const GrassFrame = styled(Frame)`
  background: linear-gradient(
        135deg,
        ${theme.color.hillGreen} 25%,
        transparent 25%
      ) -50px 0,
    linear-gradient(225deg, ${theme.color.hillGreen} 25%, transparent 25%) -50px
      0;
  background-size: 52px 100px;
  background-color: ${theme.color.grassyGreen};
  background-repeat: repeat-x;
  padding: 1rem;
  height: auto;
  ${device.tablet} {
    border: 2px solid orange;
    padding: 2rem;
  }
  ${device.laptop} {
    border: 2px solid yellow;
    max-width: 100%;
  }
  ${device.desktop} {
    border: 2px solid green;
  }
`;

export const Title = styled(globalTitle)`
  font-family: ${theme.font.georgiaBold};
  padding-top: 2.25rem;
  text-shadow: -4px 4px 0px ${theme.color.hillGreen};
  font-size: 58px;
`;

export const TelegramProj = styled.div`
  flex-direction: column;
  width: 100%;
  padding: 5px;
  padding-bottom: 50px;
  margin-left: auto;
  margin-right: auto;

  img {
    width: 75%;
  }
`;

export const WhoDatProj = styled.div`
  flex-direction: row;
  padding: 5px;
  padding-bottom: 50px;
  align-content: center;
  justify-content: center;
`;

export const ProjectSt = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 10;

  h1 {
    color: #000;
    padding: 3rem;
  }
`;

export const ProjectTitleSt = styled.div`
  color: rgb(82, 82, 82);
  font-size: 30px;
  text-align: center;
  padding-bottom: 30px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  justify-self: center;
`;

export const ProjectDescSt = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-weight: 100;
  font-size: 15px;
  color: rgb(82, 82, 82);
  word-wrap: break-word;
  justify-self: center;
`;
