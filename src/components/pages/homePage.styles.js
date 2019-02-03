import styled from 'styled-components';
import { theme, device } from '../theme';

export const BioSt = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  margin: 30px 0;

  ${device.tablet} {
    justify-content: flex-start;
    margin: 0 3rem 2rem;
  }
`;

export const PictureSt = styled.div`
  border: 1px solid red;
  img {
    max-width: 200px;
    border-radius: 50%;
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
