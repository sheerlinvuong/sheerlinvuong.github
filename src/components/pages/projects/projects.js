import React, { Component } from 'react';
import './projects.css';
import WebformGif from './webform.gif';

class Projects extends Component {
  render() {
    return (
      <div>
        <div className="Proj">
          <header className="Proj-header">
            <h1>Hooking Your Web Contact Form to Telegram</h1>
          </header>
          <img src={WebformGif} width="700" />
          <body className="Proj-body">
            <p>
              A simple messaging bot with Node.js.
              <br /> Instead of receiving contact form messages in my e-mail, I
              used a telegram bot to relay them to me.
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
              Want one for your website? Click here to read the tutorial I wrote
              on Medium.
            </a>
          </body>
        </div>

        <div className="Proj">
          <header className="Proj-header">
            <h1>WhoDat App</h1>
          </header>
          <body className="Proj-body">
            <p>
              Easily recognise celebrities with WhoDat mobile app. <br />
              Point the camera at a celebrity and their name and the percent
              accuracy appears. <br />I contributed to the design of the app as
              well as implementing the gallery screen. <br />
            </p>
          </body>
        </div>
      </div>
    );
  }
}

export default Projects;
