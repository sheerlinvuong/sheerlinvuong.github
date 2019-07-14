import React, { Component } from 'react';
import {
  ProjectSt,
  ProjectDescSt,
  ProjectTitleSt,
  WhoDatProj,
  TelegramProj,
} from './projects.styles';
import WebformGif from './webform.gif';
import WhoDatGif from './WhoDat.gif';

class Projects extends Component {
  render() {
    return (
      <ProjectSt id="work">
        <h1>Projects</h1>
        <TelegramProj>
          <ProjectTitleSt>
            Hooking Your Web Contact Form to Telegram
          </ProjectTitleSt>
          {/* <img alt="telegram form" src={WebformGif} />  so slow T_T*/}
          <ProjectDescSt>
            <p>
              <br />A simple messaging bot with Node.js.
              <br />
              Instead of receiving contact form messages in my e-mail, I used a
              telegram bot to relay them to me.
              <br />
              To achieve this I used Express.js and node-fetch to listen to HTTP
              POST requests from the web form. The bot then posts the messages
              to my telegram. <br /> I keep the express app running 24/7 using
              Heroku so I can receive messages at any time.
            </p>
            <a
              href="https://medium.com/@sheerlinvuong/hook-your-web-contact-form-to-telegram-f0c4ad442bfa"
              style={{
                textDecoration: 'none',
                color: 'black',
              }}
            >
              {' '}
              <br />
              -> Want one for your website? Click here to read the tutorial I
              wrote on Medium.
            </a>
          </ProjectDescSt>
        </TelegramProj>

        <WhoDatProj>
          <ProjectTitleSt>WhoDat App</ProjectTitleSt>
          <ProjectDescSt>
            {/* <img alt="" src={WhoDatGif} style={{ width: '30%' }} /> */}
            <p>
              Easily recognise celebrities with WhoDat mobile app. <br />
              <br />
              Point the camera at a celebrity and their name and the percent
              accuracy appears. <br />I contributed to the design of the app as
              well as implementing the navigation and gallery screen. <br />
            </p>
          </ProjectDescSt>
        </WhoDatProj>
      </ProjectSt>
    );
  }
}

export default Projects;
