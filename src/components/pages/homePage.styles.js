import styled from 'styled-components';
import { theme, device } from '../theme';

export const BioSt = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color: ${theme.color.grey};
    font: ${theme.font.roboto}
    padding-top: 20px;
    padding-left: 20px;
    border: 1px solid red;
  }
`;
