import React, { Component } from 'react';
import './footer.css';
import instagram from './logo-instagram.svg';
import github from './logo-github.svg';
import linkedin from './logo-linkedin.svg';
import twitter from './logo-twitter.svg';
import email from './logo-email.svg';

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

          <img src={linkedin} />

          <a href="https://twitter.com/sheerlinonline">
            <img src={twitter} />
          </a>

          <a>
            <img src={email} />
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
