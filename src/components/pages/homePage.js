import React, { Component } from 'react';
import * as S from '../hero/styles';
import Projects from '../projects/projects';
import Resume from '../resume/Resume';
import portraitImg from '../hero/portrait.png';
import cloudImg from '../hero/clouds.png';
import cloudLImg from '../hero/cloud-left.png';
import cloudRImg from '../hero/cloud-right.png';
import { Balloon, ContactButton } from '../hero/buttons';
class HomePage extends Component {
  render() {
    return (
      <S.Page>
        <S.Hero>
          <Balloon />
          <ContactButton />
          <S.Content>
            <S.Title>Hello</S.Title>
            <S.Text>
              I’m Sheerlin, <br />a software developer based in London
            </S.Text>
          </S.Content>
          <S.ImgWrapper>
            <S.Img src={portraitImg} />
          </S.ImgWrapper>
          <S.Cloud src={cloudImg} />
          <S.CloudsWrapper>
            <S.Clouds src={cloudLImg} />
            <S.Clouds src={cloudRImg} />
          </S.CloudsWrapper>
        </S.Hero>
        {/* <Projects /> */}
        {/* <Resume /> */}
      </S.Page>
    );
  }
}

export default HomePage;
