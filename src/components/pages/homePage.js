import React, { Component } from 'react';
import * as S from './styles';
import Projects from '../projects/projects';
import Resume from '../resume/Resume';
import portraitImg from '../hero/portrait.png';
import cloudImg from '../hero/clouds.png';
import { Balloon, ContactButton } from '../hero/buttons';
class HomePage extends Component {
  render() {
    return (
      <div>
        <S.Hero>
          <Balloon />
          <ContactButton />
          <S.Content>
            <S.Title>Hello</S.Title>
            <S.Text>
              I’m Sheerlin, <br />a software developer based in London
            </S.Text>
          </S.Content>
          <S.Img src={portraitImg} />
          <S.Clouds src={cloudImg} />
        </S.Hero>
        {/* <Projects /> */}
        {/* <Resume /> */}
      </div>
    );
  }
}

export default HomePage;
