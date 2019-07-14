import styled from 'styled-components';
import { device, theme } from '../theme';

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  text-align: center;
  padding: 50px 0;
  color: ${theme.color.tuna};
`;

export const Links = styled.div`
  a {
    display: none;
    padding: 0.5em;
    font-size: 1em;
    margin-left: 0px;
    font-weight: 300;
    font-family: 'Open Sans', sans-serif;
    font-weight: 100;
    ${device.tablet} {
      display: inline;
      padding: 20px;
      font-size: 15px;
    }
  }
`;

export const Logo = styled.div`
  margin: 0 auto;
  font-size: 17px;

  ${device.tablet} {
    max-width: 50%;
  }
`;
