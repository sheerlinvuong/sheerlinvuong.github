import styled, { keyframes } from 'styled-components';
import { theme, device } from '../theme';

export const Contact = styled.div`
  align-self: flex-end;
  background-color: ${theme.color.sunnyYellow};
  width: fit-content;
  padding: 1rem;
  border-radius: 3rem;
  box-shadow: -1px 4px 6px ${theme.color.textShadow};
  color: rgba(0, 0, 0, 0.65);
  margin: 1.5rem;
`;

const Scatter = keyframes`
  0% { top: 0; }
  50% { top: -10px; }
  100% { top: 0; }
`;

export const Balloon = styled.div`
  position: absolute;
  animation: ${Scatter} 2.5s infinite;
  margin: 2rem 1.5rem 0;
`;

// export const Balloon = styled.div`
//   position: absolute;
//   background-color: ${theme.color.red};
//   width: 5rem;
//   height: 6rem;
//   border-radius: 6rem / 7rem;
//   padding: 1rem;
//   justify-content: center;
//   margin: 1.5rem;
//   ::after {
//     content: '';
//     width: 0;
//     height: 0;
//     border-left: 1rem solid transparent;
//     border-right: 1rem solid transparent;
//     border-bottom: 1rem solid red;
//     position: absolute;
//     z-index: 2;
//     bottom: -0.75rem;
//     left: 1.5rem;
//   }
// `;
