import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './footer.css';
import instagram from './logo-instagram.svg';
import github from './logo-github.svg';
import twitter from './logo-twitter.svg';
import email from './logo-email.svg';
import medium from './logo-medium.svg';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <ul style={{ flex: 1, flexDirection: 'column' }}>
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
            </NavLink>{' '}
          </a>
        </ul>
      </footer>
    );
  }
}

export default Footer;
/* <div
          style={{ backgroundColor: this.state.githuhover ? '#fff' : '#000' }}
        >
          <img
            onMouseEnter={() => {
              this.setState({ githuhover: true });
            }}
            onMouseLeave={() => {
              this.setState({ githuhover: false });
            }}
            src={instagram}
          />
        </div> */
