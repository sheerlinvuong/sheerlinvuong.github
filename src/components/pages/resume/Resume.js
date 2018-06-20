import React, { Component } from 'react';
import './Resume.css';
//import pic from './pic.png';

class Resume extends Component {
  render() {
    return (
      <div className="CV">
        <header className="CV-header">
          <h1>Resume</h1>
        </header>
        <body className="CV-body">
          <p>cv will be here, maybe add pdf download</p>
        </body>
      </div>
    );
  }
}

export default Resume;
