import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { NavWrapper, LogoSt } from './navBar.styles';

class NavBar extends Component {
  render() {
    return (
      <NavWrapper>
        <LogoSt>S H E E R L I N _ V </LogoSt>
        <ul>
          <li>
            <NavLink
              exact
              to=""
              style={{
                textDecoration: 'none',
                color: 'grey',
              }}
              activeStyle={{ color: 'red' }}
            >
              Work
            </NavLink>
          </li>

          <li>
            <NavLink
              exact
              to="/contact"
              style={{
                textDecoration: 'none',
                color: 'grey',
              }}
              activeStyle={{ color: '#007fa1' }}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </NavWrapper>
    );
  }
}

export default NavBar;
