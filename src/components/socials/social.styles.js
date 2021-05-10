import styled from 'styled-components';
import { theme, device } from '../theme';
import { Frame, Title } from '../pages/homePage.styles';

export const SoilFrame = styled(Frame)`
  background-color: #9b673c;
  padding: 1rem;
  color: ${theme.color.white};
  height: auto;
  &::before {
    position: absolute;
    top: 0;
    width: 100%;
    content: ' ';
    background: radial-gradient(
      circle at 50% 25%,
      transparent 30%,
      ${theme.color.grassyGreen} 0%
    );
    background-size: 40px 90px;
    height: 24px;
    background-repeat: repeat-x;
    background-position: -20px 0px;
  }
  background-repeat: repeat-x;
  ${device.tablet} {
    padding: 2rem 2rem 3rem;
  }
  ${device.laptop} {
    max-width: 100%;
  }
`;

export const Heading = styled(Title)`
  font-family: ${theme.font.georgiaBold};
  padding: 2.25rem;
  font-size: 24px;
  text-shadow: -6px 6px 10px ${theme.color.text};
`;

export const IconsSt = styled.div`
  display: flex;
`;

export const IconWrapper = styled.a`
  cursor: pointer;
  padding: 1rem;
  color: ${theme.color.white};
  transition: transform 500ms;
  &:hover {
    color: ${theme.color.grassyGreen};
    transform: scale(1.4);
  }
`;
