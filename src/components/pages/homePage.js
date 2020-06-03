import React, { Component } from 'react';
import * as S from './styles';
import Projects from '../projects/projects';
import Resume from '../resume/Resume';
import heroImg from './hero-copy.png';

class HomePage extends Component {
  render() {
    return (
      <div>
        <S.Bio>
          <S.Content>
            <S.Title>Hello</S.Title>
            <S.Text>
              I’m Sheerlin <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </S.Text>
          </S.Content>
          <S.Img src={heroImg} />
        </S.Bio>
        <Projects />
        <Resume />
      </div>
    );
  }
}

export default HomePage;
