import styled from 'styled-components';
import { device, theme } from '../theme';

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  padding: 4rem 0 6rem;
  color: ${theme.color.tuna};

  ${device.tablet} {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 3rem 6rem;
  }
`;

export const Links = styled.div`
    padding: 1rem 0.5rem 0.5rem 0.5rem;
  a {
    font-size: 1rem;
    padding: 0.5rem;
    color: ${theme.color.teal};
    text-decoration: none;
    }
      ${device.tablet} {
       padding:0.5rem;
      font-size: 15px;
      }
`;

export const Logo = styled.div`
  font-size: 18px;
`;
