import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './nameLogo.png';
import './navBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="App">
        <img className="App-logo" src={logo} alt="logo" />
        <header className="App-header">
          <li>
            <NavLink to="">ABOUT</NavLink>
          </li>
          <li>
            <NavLink to="/projects">PROJECTS</NavLink>
          </li>
          <li>
            <NavLink to="/resume">RESUME</NavLink>
          </li>
          <li>
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
        </header>
      </div>
    );
  }
}

export default NavBar;
