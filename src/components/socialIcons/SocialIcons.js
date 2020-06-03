import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import instagram from './logo-instagram.svg';
import github from './logo-github.svg';
import twitter from './logo-twitter.svg';
import email from './logo-email.svg';
import medium from './logo-medium.svg';

const SocialIconsSt = styled.div`
  display:flex;
  flex-direction: column;
  height: 100%
  align-items: center;
  img{
    padding: 5px;
  }
`;

class SocialIcons extends Component {
  render() {
    return (
      <SocialIconsSt>
        <ul>
          <a href="https://www.instagram.com/sheerlin/">
            <img src={instagram} height="15px" />
          </a>

          <a href="https://github.com/sheerlinvuong">
            <img src={github} height="15px" />
          </a>

          <a href="https://medium.com/@sheerlinvuong">
            <img src={medium} height="15px" />
          </a>
          <a href="https://twitter.com/sheerlinonline">
            <img src={twitter} height="15px" />
          </a>

          <a>
            <NavLink exact to="/contact">
              <img src={email} height="15px" />
            </NavLink>
          </a>
        </ul>
      </SocialIconsSt>
    );
  }
}

export default SocialIcons;
