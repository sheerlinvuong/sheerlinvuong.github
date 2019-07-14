import styled from 'styled-components';
import { theme, device } from '../theme';

export const Bio = styled.section`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  /* margin: 30px 0; */
  height: 100%;
  border: 1px solid black;

  /* ${device.tablet} {
    justify-content: flex-start;
    margin: 0 0 2rem 3rem;
  } */
`;

export const Text = styled.p`
  font-family: 'Roboto Mono', monospace;
  border: 1px solid red;
  color: ${theme.color.dolphin};
  line-height: 28px;
  font-size: 18px;
  padding: 10px 20px;

  /* h1 {
    color: ${theme.color.grey};
    font: ${theme.font.roboto}
    padding-top: 20px;
    padding-left: 20px;
    border: 1px solid red;
  } */
`;

export const Title = styled.p`
  font-family: ${theme.font.roboto};
  font-size: 39vw;
  color: black;
  -webkit-text-fill-color: white; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
`;
