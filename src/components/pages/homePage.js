import React, { Component } from 'react';
import * as S from './homePage.styles';
import { Hero } from '../hero/hero';
import { Work } from '../work/work';
import Projects from '../projects/projects';
import Contact from '../contact/contact';
class HomePage extends Component {
  render() {
    return (
      <S.Page>
        <Hero />
        <Work />
        <Projects />
        <Contact />
      </S.Page>
    );
  }
}

export default HomePage;
