import React, { Component } from 'react';
import { BioSt, BgTriangle, PictureSt, TextSt } from './homePage.styles';
import Projects from '../projects/projects';
import Resume from '../resume/Resume';

class HomePage extends Component {
  render() {
    return (
      <div>
        <BioSt>
          <TextSt />
        </BioSt>
        <Projects />
        <Resume />
      </div>
    );
  }
}

export default HomePage;
