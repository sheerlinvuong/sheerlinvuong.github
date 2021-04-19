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
        <S.Frame>
          {/* <S.Content>
            <S.Title>Some things Ive built...</S.Title>
            <S.Text>Here are some projects I have worked on in the past</S.Text>
          {/* <Projects /> */}
        </S.Frame>
        {/* </S.Content>  */}
        {/* <Resume /> */}
        <Contact />
      </S.Page>
    );
  }
}

export default HomePage;
