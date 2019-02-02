import React, { Component } from 'react';
import { BioSt } from './homePage.styles';
import pic from './pic.png';
// import Projects from './projects/projects';
// import Resume from './resume/Resume';

class HomePage extends Component {
  state = {};

  handleWindowResize = () => {
    this.setState({ isMobile: window.innerWidth <= 600 });
  };

  componentDidMount() {
    window.addEventListener('load', this.handleWindowResize);
    window.addEventListener('resize', this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
    window.removeEventListener('load', this.handleWindowResize);
  }

  render() {
    return (
      <div>
        <BioSt>
          {!this.state.isMobile && (
            <picture className="picbox">
              <img src={pic} alt="pic" />
            </picture>
          )}
          <header className="Bio-header">
            <h1>Hello, I'm Sheerlin </h1>
          </header>
          <body className="Bio-body">
            <p>Hello, I'm Sheerlin </p>
            <p>This website is currrently under construction</p>
            <p>It is best viewed in desktop </p>
          </body>
        </BioSt>
        {/* <Projects /> */}
        {/* <Resume /> */}
      </div>
    );
  }
}

export default HomePage;
