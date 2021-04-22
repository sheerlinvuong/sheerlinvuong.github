import React from 'react';
import * as S from './work.styles';
import KobleImg from './koble.jpg';
import LiftedImg from './lifted.jpg';

export const Work = () => {
  return (
    <S.HillFrame>
      <S.Heading>Some things I&apos;ve worked on</S.Heading>
      <S.Content>
        <S.Item>
          <S.Image src={KobleImg} />
          <S.Link target="_blank" href="https://www.koble.ai/">
            Koble
          </S.Link>
        </S.Item>
        <S.Item>
          <S.Image src={LiftedImg} />
          <S.Link target="_blank" href="https://www.liftedcare.com/">
            Lifted
          </S.Link>
        </S.Item>
      </S.Content>
      <S.Hill1 />
      <S.Hill2 />
    </S.HillFrame>
  );
};
