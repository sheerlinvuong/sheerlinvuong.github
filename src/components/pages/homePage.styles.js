import styled from 'styled-components';
import { theme, device } from '../theme';

export const Page = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* ${device.tablet} {
    margin: 0 10vw;
  }
  ${device.desktop} {
    width: 1440px;
    margin: auto;
  } */
`;

export const Frame = styled.section`
  width: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  position: relative;
  color: white;
  border: 2px solid red;

  ${device.tablet} {
    border: 2px solid orange;
    padding: 0 10vw;
  }
  ${device.laptop} {
    border: 2px solid yellow;
    max-width: 1440px;
  }
  ${device.desktop} {
    border: 2px solid green;
  }
`;

export const Title = styled.p`
  position: relative;
  font-size: 64px;
  text-align: center;
  text-shadow: -2px 2px 0px ${theme.color.cloudShadow};
  padding-bottom: 4rem;
`;

export const SubTitle = styled.p`
  font-size: 20px;
  text-shadow: 0px 2px 4px ${theme.color.cloudShadow};
  line-height: 1.25;
`;
