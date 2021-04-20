import React from 'react';
import * as S from './styles';
import { Title, SubTitle } from '../pages/styles';

export const Work = () => {
  return (
    <S.HillFrame>
      <Title>Some things Ive built...</Title>
      <SubTitle>Here are some projects I have worked on in the past</SubTitle>
      <S.Hill1 />
      <S.Hill2 />
    </S.HillFrame>
  );
};
