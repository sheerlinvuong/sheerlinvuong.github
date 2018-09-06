import React, { Component } from 'react';
import './Resume.css';
import { Document, Page } from 'react-pdf';

class Resume extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  };

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  };

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div className="resume">
        <a href="CVSheerlin.pdf" type="application/pdf">
          {' '}
          Download my resume in PDF here!{' '}
        </a>
        <Document file="CVSheerlin.pdf" onLoadSuccess={this.onDocumentLoad}>
          <Page pageNumber={pageNumber} scale="1.3" />
        </Document>
      </div>
    );
  }
}
export default Resume;
