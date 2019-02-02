import styled from 'styled-components';
import { theme, device } from '../theme';

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  text-align: center;
  height: 5vh;
  padding: 50px 0;

  li {
    display: inline;
    padding: 0.5em;
    font-size: 1em;
    margin-left: 0px;
    font-weight: 300;
    font-family: 'Open Sans', sans-serif;
    font-weight: 100;
    border: 1px solid red;
    ${device.tablet} {
      padding: 20px;
      font-size: 15px;
      border: 1px solid blue;
    }
    ${device.laptop}{
    border: 1px solid green
  }
`;

export const LogoSt = styled.div`
  display: block;
  margin-left: 50px;
  margin-right: 50px;
  font-size: 17px;

  ${device.tablet} {
    max-width: 50%;
  }
`;
