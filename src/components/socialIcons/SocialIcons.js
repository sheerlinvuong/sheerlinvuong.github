import React, { Component } from 'react';
import styled from 'styled-components';
import { IconEmail, IconGithub, IconLinkedin, IconMedium } from './Icons';

const SocialIconsSt = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  img {
    padding: 5px;
  }
`;

class SocialIcons extends Component {
  render() {
    return (
      <SocialIconsSt>
        <ul>
          <IconEmail />
          <IconGithub />
          <IconLinkedin />
          <IconMedium />
          {/* <IconTwitter href="https://twitter.com/sheerlinonline"/> */}
          {/* <IconInstagram href="https://www.instagram.com/sheerlin/"/> */}

          {/* <a href="https://github.com/sheerlinvuong">
            <img src={IconGithub} height="15px" />
          </a>
          <a href="https://medium.com/@sheerlinvuong">
            <img src={medium} height="15px" />
          </a> */}
          {/* <a> // mailTo instead
            <NavLink exact to="/contact">
              <img src={email} height="15px" />
            </NavLink>
          </a> */}
        </ul>
      </SocialIconsSt>
    );
  }
}

export default SocialIcons;
