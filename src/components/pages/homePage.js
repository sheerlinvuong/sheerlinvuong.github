import React, { Component } from 'react';
import * as S from './styles';
import Projects from '../projects/projects';
import Resume from '../resume/Resume';
import { Hero } from '../hero/hero';
import Contact from '../contact/contact';
class HomePage extends Component {
  render() {
    return (
      <S.Page>
        <Hero />
        {/* <S.Frame>
          <S.Title>Some things Ive built...</S.Title>
          <S.SubTitle>
            Here are some projects I have worked on in the past
          </S.SubTitle>
        </S.Frame> */}
        {/* <Projects /> 
        {/* <Resume /> */}
        <Contact />
      </S.Page>
    );
  }
}

export default HomePage;
