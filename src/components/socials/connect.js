import React, { Component } from 'react';
import { IconEmail, IconGithub, IconLinkedin, IconMedium } from './Icons';
import { SoilFrame, Heading, IconsSt } from './social.styles';

class Socials extends Component {
  render() {
    return (
      <SoilFrame>
        <Heading>Let&apos;s connect!</Heading>
        <IconsSt>
          <IconGithub href="https://github.com/sheerlinvuong" />
          <IconLinkedin href="https://www.linkedin.com/in/sheerlin-vuong-8396aa174/" />
          <IconMedium href="https://medium.com/@sheerlinvuong" />
          <IconEmail href="mailto:sheerlinvuong@gmail.com" />
          {/* <IconTwitter href="https://twitter.com/sheerlinonline"/> */}
          {/* <IconInstagram href="https://www.instagram.com/sheerlin/"/> */}
        </IconsSt>
      </SoilFrame>
    );
  }
}

export default Socials;
