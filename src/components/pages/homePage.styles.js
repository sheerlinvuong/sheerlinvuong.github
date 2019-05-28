import styled from 'styled-components';
import { theme, device } from '../theme';

export const BioSt = styled.section`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  margin: 30px 0;
  height: 100%;

  ${device.tablet} {
    justify-content: flex-start;
    margin: 0 0 2rem 3rem;
  }
`;

export const TextSt = styled.div`
  font-family: 'Open Sans', sans-serif;
  border: 1px solid red;

  h1 {
    color: ${theme.color.grey};
    font: ${theme.font.roboto}
    padding-top: 20px;
    padding-left: 20px;
    border: 1px solid red;
  }
`;
