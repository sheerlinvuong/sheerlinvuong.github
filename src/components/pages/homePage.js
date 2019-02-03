import React, { Component } from 'react';
import { BioSt, PictureSt, TextSt } from './homePage.styles';
import pic from './pic.png';
import Projects from '../projects/projects';
import Resume from '../resume/Resume';

class HomePage extends Component {
  render() {
    return (
      <div>
        <BioSt>
          <PictureSt>
            <img src={pic} alt="pic" />
          </PictureSt>
          <TextSt>
            <h1>Hello, I'm Sheerlin </h1>

            <p>Hello, I'm Sheerlin </p>
            <p>This website is currrently under construction</p>
            <p>It is best viewed in desktop </p>
          </TextSt>
        </BioSt>
        <Projects />
        <Resume />
      </div>
    );
  }
}

export default HomePage;
