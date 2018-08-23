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
            <p>Creating a simple messaging bot with Node.js</p>
            <a href="https://medium.com/@sheerlinvuong/hook-your-web-contact-form-to-telegram-f0c4ad442bfa">
              {' '}
              Read the full article here!
            </a>
          </body>
        </div>

        <div className="Proj">
          <header className="Proj-header">
            <h1>WhoDat App</h1>
          </header>
          <body className="Proj-body">
            <p>The app will be able to recognise celebrities.</p>
          </body>
        </div>
      </div>
    );
  }
}

export default Projects;
