import styled from 'styled-components';
// import { theme, device } from '../theme';

export const TelegramProj = styled.div`
  flex-direction: column;
  width: 100%;
  padding: 5px;
  padding-bottom: 50px;
  margin-left: auto;
  margin-right: auto;

  img {
    width: 75%;
  }
`;

export const WhoDatProj = styled.div`
  flex-direction: row;
  padding: 5px;
  padding-bottom: 50px;
  align-content: center;
  justify-content: center;
`;

export const ProjectSt = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color: #000;
    padding: 3rem;
  }
`;

export const ProjectTitleSt = styled.div`
  color: rgb(82, 82, 82);
  font-size: 30px;
  text-align: center;
  padding-bottom: 30px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  justify-self: center;
`;

export const ProjectDescSt = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-weight: 100;
  font-size: 15px;
  color: rgb(82, 82, 82);
  word-wrap: break-word;
  justify-self: center;
`;
