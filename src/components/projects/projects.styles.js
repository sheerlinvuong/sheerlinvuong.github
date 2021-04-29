import styled from 'styled-components';
import { theme, device } from '../theme';
import { Frame, Title } from '../pages/homePage.styles';

export const GrassFrame = styled(Frame)`
  background-color: ${theme.color.grassyGreen};
  padding: 1rem 1rem 4rem;
  height: auto;
  color: ${theme.color.soilBrown};
  ${device.tablet} {
    padding: 2rem 2rem 4rem;
  }
  ${device.laptop} {
    max-width: 100%;
  }
`;

export const Heading = styled(Title)`
  font-family: ${theme.font.georgiaBold};
  padding-top: 2.25rem;
  font-size: 58px;
  color: ${theme.color.soilBrown};
  text-shadow: -3px 3px 4px ${theme.color.hillGreen};
`;

export const ImgWrapper = styled.div`
  background-color: ${theme.color.soilBrown};
  padding: 1rem;
  border-radius: 0.75rem;
  width: auto;

  video {
    width: 100%;
  }
`;

export const MobProject = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${ImgWrapper} {
    width: 14rem;
  }
  ${device.tablet} {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
    .content {
      width: 50%;
    }
  }
  ${device.laptop} {
    max-width: 1440px;
  }
`;

export const LandscapeProject = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6rem;
  ${device.tablet} {
    padding: 0 2vw;
    max-width: 700px;
  }
  ${device.laptop} {
    max-width: 1440px;
    flex-direction: row-reverse;
    align-items: center;
    .content {
      width: 100%;
      padding: 1rem;
      padding-right: 2rem;
    }
  }
`;

export const ProjectHeading = styled.h2`
  font-family: ${theme.font.georgiaBold};
  text-shadow: -2px 2px 0px ${theme.color.hillGreen};
  font-size: 34px;
  text-align: center;
  padding: 2rem 0;
`;

export const Description = styled.div`
  font-family: ${theme.font.openSans};
  font-weight: 200;
  word-wrap: break-word;
  p {
    padding-bottom: 0.5rem;
  }
  p:last-child {
    padding-top: 2rem;
  }
`;

export const ButtonLink = styled.a`
  font-family: ${theme.font.georgia};
  background-color: ${theme.color.red};
  color: ${theme.color.white};
  padding: 1rem 2rem;
  border-radius: 3rem;
  box-shadow: -1px 4px 6px ${theme.color.hillGreen};
  margin-top: 1.5rem;
`;
