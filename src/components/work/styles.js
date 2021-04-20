import styled from 'styled-components';
import { theme, device } from '../theme';
import {
  Frame,
  SubTitle as globalSubtitle,
  Title as globalTitle
} from '../pages/styles';

export const HillFrame = styled(Frame)`
  padding: 1rem 1rem 10rem;
  height: 500px;
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

const Hill = styled.div`
  position: absolute;
  background: ${theme.color.hillGreen};
  width: 354px;
  height: 395px;
  border-radius: 354px / 395px;
  bottom: -50%;
  left: -150px;
`;

export const Hill1 = styled(Hill)``;

export const Hill2 = styled(Hill)`
  width: 389px;
  height: 291px;
  border-radius: 389px / 291px;
  bottom: -45%;
  left: 155px;
`;
