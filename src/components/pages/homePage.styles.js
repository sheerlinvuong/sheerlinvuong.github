import styled from 'styled-components';
import { theme, device } from '../theme';

export const Page = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(#97d4ff 0%, #ddeefa 30%);
`;

export const Frame = styled.section`
  width: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  position: relative;
  color: white;

  ${device.tablet} {
    padding: 0 10vw;
  }
  ${device.laptop} {
    max-width: 1440px;
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
