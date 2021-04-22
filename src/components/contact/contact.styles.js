import styled from 'styled-components';
import { theme, device } from '../theme';
import { Frame, SubTitle as globalSubtitle } from '../pages/homePage.styles';

export const CheckeredFrame = styled(Frame)`
  background-color: white;
  background-image: linear-gradient(
      90deg,
      ${theme.color.checkeredYellow} 50%,
      transparent 50%
    ),
    linear-gradient(${theme.color.checkeredYellow} 50%, transparent 50%);
  background-size: 50px 50px;
  padding: 1rem;
  height: auto;
  ${device.tablet} {
    border: 2px solid orange;
    padding: 2rem;
  }
  ${device.laptop} {
    border: 2px solid yellow;
    max-width: 100%;
  }
  ${device.desktop} {
    border: 2px solid green;
  }
`;

export const FormWrapper = styled.div`
  max-width: 600px;
  width: 100%;
  border-radius: 2.5rem;
  background-color: #eaba50;
  padding: 3rem 2rem;
  font-family: ${theme.font.georgiaBold};
`;

export const Subtitle = styled(globalSubtitle)`
  font-size: 24px;
  text-shadow: -2px 2px 5px ${theme.color.text};
  text-align: center;
  padding-bottom: 2rem;
`;

export const FormItem = styled.div`
  & input,
  & textarea {
    width: 100%;
    padding: 0.75rem;
    border: none;
    border-radius: 0.25rem;
    margin: 0.75rem 0 1rem;
    resize: vertical;
    font-family: ${theme.font.georgia};
    color: ${theme.color.text};
    :focus {
      outline: none;
    }
  }
  & textarea {
    height: 150px;
  }
`;

export const SubmitArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: inherit;
  ${device.tablet} {
    flex-direction: row;
  }
`;

export const SubmitButton = styled.button`
  font-family: ${theme.font.georgia};
  background-color: ${theme.color.red};
  color: ${theme.color.white};
  padding: 1rem 2rem;
  border-radius: 3rem;
  box-shadow: -1px 4px 6px ${theme.color.cloudShadow};
  margin: 1.5rem;
  border: none;
  font-size: 18px;
  cursor: pointer;
  :focus {
    outline: none;
  }
  :hover {
    background-color: ${theme.color.hillGreen};
    box-shadow: 0px 2px 2px ${theme.color.cloudShadow};
  }
`;

// .recaptcha {
//   margin - top: 6px;
//   margin - bottom: 16px;
//   width: 300px;
// }
