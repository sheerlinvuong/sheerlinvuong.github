import React, { Component } from 'react';
import './footer.css';
import instagram from './logo-instagram.svg';
import github from './logo-github.svg';
import linkedin from './logo-linkedin.svg';
import twitter from './logo-twitter.svg';
import email from './logo-email.svg';

class Footer extends Component {
  // renderIcon(svgImage) {
  //   return()
  // }

  state = {
    githuhover: false,
  };
  render() {
    return (
      <footer>
        {/* <div
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
        </div> */}
        <li>
          <a href="https://github.com/sheerlinvuong">
            <img src={github} />
          </a>

          <img src={linkedin} />

          <a href="https://twitter.com/sheerlinonline">
            <img src={twitter} />
          </a>

          <a href="mailto:sheerlinvuong@gmail.com">
            <img src={email} />
          </a>
        </li>
      </footer>
    );
  }
}

export default Footer;
