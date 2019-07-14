import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import * as S from './styles';

class NavBar extends Component {
  render() {
    return (
      <S.Nav>
        <S.Logo>S H E E R L I N _ V </S.Logo>
        <S.Links>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </S.Links>
      </S.Nav>
    );
  }
}

export default NavBar;
