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
          <p>
            Hello, I'm k,gkj,Sheerlin sdjnvd vdjnkjfnvd fkdlkfgkj fdgijfdgj{' '}
          </p>
          <p>Hello, this website is under construction</p>
          <p>Hello, I'm=nvd vdjnkjfnvd fkdlkfgkj fdgijfdgj </p>
        </body>
        <picture className="picbox">
          <img src={pic} alt="pic" className="pic" />
        </picture>
      </div>
    );
  }
}

export default HomePage;
