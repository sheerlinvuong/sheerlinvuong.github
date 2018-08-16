import React, { Component } from 'react';
import './homePag.css';
import pic from './pic.png';

class HomePage extends Component {
  render() {
    return (
      <div className="Bio">
        <header className="Bio-header">
          <h1>Hello, I'm Sheerlin </h1>
        </header>
        <body className="Bio-body">
          <p>Hello, I'm Sheerlin </p>
          <p>This website is currrently under construction</p>
          <p />
        </body>
        <picture className="picbox">
          <img src={pic} alt="pic" />
        </picture>
      </div>
    );
  }
}

export default HomePage;
