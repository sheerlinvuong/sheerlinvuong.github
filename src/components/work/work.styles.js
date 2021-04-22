import styled from 'styled-components';
import { theme, device } from '../theme';
import { Frame } from '../pages/homePage.styles';

export const HillFrame = styled(Frame)`
  padding: 6rem 2rem 10rem;
  height: auto;
  font-family: ${theme.font.georgiaBold};
  color: #2e82d0;
  ${device.tablet} {
    padding: 4rem 2rem 7rem;
  }
  ${device.laptop} {
    max-width: 1440px;
  }
`;

export const Heading = styled.h1`
  font-size: 42px;
  text-shadow: -2px 2px 1px #c5b5f8;
  max-width: 24rem;
  font-weight: 100;
  padding: 1.5rem;
`;

export const Image = styled.img`
  width: 80%;
  max-width: 400px;
`;
export const Link = styled.a`
  font-size: 20px;
  padding-top: 0.5rem;
  text-decoration: none;
  color: #2e82d0;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  ${device.laptop} {
    flex-direction: row;
  }
`;

const Hill = styled.div`
  position: absolute;
  background: ${theme.color.hillGreen};
  width: 354px;
  height: 395px;
  border-radius: 354px / 395px;
  bottom: -250px;
  left: -150px;
`;

export const Hill1 = styled(Hill)``;

export const Hill2 = styled(Hill)`
  width: 389px;
  height: 291px;
  border-radius: 389px / 291px;
  bottom: -230px;
  left: 125px;
`;
