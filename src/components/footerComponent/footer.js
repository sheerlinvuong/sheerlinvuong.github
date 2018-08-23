import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './footer.css';
import instagram from './logo-instagram.svg';
import github from './logo-github.svg';
import linkedin from './logo-linkedin.svg';
import twitter from './logo-twitter.svg';
import email from './logo-email.svg';
import medium from './logo-medium.svg';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <li>
          <a href="https://www.instagram.com/sheerlin/">
            <img src={instagram} />
          </a>

          <a href="https://github.com/sheerlinvuong">
            <img src={github} />
          </a>

          <a href="https://medium.com/@sheerlinvuong">
            <img src={medium} height="35px" />
          </a>
          <a href="https://twitter.com/sheerlinonline">
            <img src={twitter} />
          </a>

          <a>
            <NavLink exact to="/contact">
              <img src={email} />
            </NavLink>{' '}
          </a>
        </li>
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
