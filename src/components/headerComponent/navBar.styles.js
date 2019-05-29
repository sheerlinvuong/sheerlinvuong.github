import styled from "styled-components";
import { device } from "../theme";

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
    ${device.tablet} {
      padding: 20px;
      font-size: 15px;
    }

`;

export const LogoSt = styled.div`
  display: block;
  margin: 0 50px 35px;
  font-size: 17px;

  ${device.tablet} {
    max-width: 50%;
  }
`;
