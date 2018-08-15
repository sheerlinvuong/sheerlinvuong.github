import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './nameLogo.png';
import './navBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="App">
        <img className="App-logo" src={logo} alt="logo" />
        <ul>
          <li>
            <NavLink
              exact
              to=""
              style={{
                textDecoration: 'none',
                color: 'grey',
              }}
              activeStyle={{ color: 'lightsalmon' }}
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/projects"
              style={{
                textDecoration: 'none',
                color: 'grey',
              }}
              activeStyle={{ color: 'lightsalmon' }}
            >
              PROJECTS
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/resume"
              style={{
                textDecoration: 'none',
                color: 'grey',
              }}
              activeStyle={{ color: 'lightsalmon' }}
            >
              RESUME
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
              activeStyle={{ color: 'lightsalmon' }}
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
