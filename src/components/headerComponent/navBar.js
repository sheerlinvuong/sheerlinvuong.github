import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './navBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-logo">S H E E R L I N _ V </div>
        <div className="nav">
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
                About
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
                Projects
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
                activeStyle={{ color: '	#00A86B' }}
              >
                Resume
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
        </div>
      </div>
    );
  }
}

export default NavBar;
