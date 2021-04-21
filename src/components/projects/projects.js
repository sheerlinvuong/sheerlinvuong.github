import React, { Component } from 'react';
import WebformGif from './webform.gif';
import WhoDatGif from './WhoDat.gif';
import * as S from './projects.styles';

class Projects extends Component {
  render() {
    return (
      <S.GrassFrame>
        <S.Heading>Personal projects</S.Heading>
        <S.Project>
          <S.ImgWrapper style={{ width: '14rem' }}>
            <img alt="" src={WhoDatGif} />
          </S.ImgWrapper>
          <S.ProjectHeading>WhoDat</S.ProjectHeading>
          <S.Description>
            <p>
              WhoDat is a mobile app that can easily recognise celebrities. It
              works by utilising the Amazon Rekognition API to identify people
              in the camera frame and saves the celebrity name and accuracy into
              the app gallery.
            </p>
            <p>
              I contributed to the design of the app as well as implementing the
              navigation and gallery screen.
            </p>
            <p>
              Made with: <br />
              React native, Expo, Express, Amazon Rekognition
            </p>
          </S.Description>
        </S.Project>
        <S.Project>
          <S.ImgWrapper>
            <img alt="telegram form" src={WebformGif} />
          </S.ImgWrapper>
          <S.ProjectHeading>
            Hooking Your Contact Form to Telegram
          </S.ProjectHeading>
          <S.Description>
            <p>A simple messaging bot with Node.js.</p>
            <p>
              Instead of receiving contact form messages in my e-mail, I used a
              telegram bot to relay them to me.
            </p>
            <p>
              To achieve this I used Express.js and node-fetch to listen to HTTP
              POST requests from the web form. The bot then posts the messages
              to my telegram. <br /> I keep the express app running 24/7 using
              Heroku so I can receive messages at any time.
            </p>
            <a
              href="https://medium.com/@sheerlinvuong/hook-your-web-contact-form-to-telegram-f0c4ad442bfa"
              style={{
                textDecoration: 'none',
                color: 'black'
              }}
            >
              {' '}
              <br />
              -&gt; Want one for your website? Click here to read the tutorial I
              wrote on Medium.
            </a>
            <p>
              Made with: <br />
              React, Express, Telegraf, Heroku
            </p>
          </S.Description>
        </S.Project>
      </S.GrassFrame>
    );
  }
}

export default Projects;
