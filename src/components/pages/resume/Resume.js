import React, { Component } from 'react';
import './Resume.css';
//import cv from './sheerlincv.pdf';
//import { Document } from 'react-pdf';
//import pic from './pic.png';

const BULLET = '\u2022 ';
class Resume extends Component {
  educationContent = [
    {
      date: '2014 - 2017',
      positionTitle: 'Swansea University',
      details: [
        'Electrical and Electronic Engineering (BEng): First Class Honours (1st)',
      ],
    },

    {
      date: '2012 – 2014',
      positionTitle: 'Lambeth Academy Sixth Form',
      details: ['A-levels: Mathematics, Chemistry, Physics'],
    },
  ];
  workContent = [
    {
      date: 'June 2018 - Present: ',
      positionTitle: ' “WhoDat” - Celebrity facial recognition app',
      details: [
        <ul>
          <li>{BULLET}Designed and implemented first mobile app.</li>
          <li> Integrated Amazon AWS “Rekognition” API.</li>
          <li>
            {BULLET}● Fast development strategy, implemented working concept in
            a week.
          </li>
          <li>
            {BULLET}● Created celebrity face data set by implementing imdb web
            scraper.
          </li>
          <li>
            {BULLET}● Obtained working command of javascript and frameworks
            (React Native, Express).
          </li>
        </ul>,
      ],
    },

    {
      date: '10/16',
      positionTitle: 'Catering Assistant at Liberty Stadium',
      details: [
        '● Efficiently serving customers in a fast-paced environment',
        '● Providing great customer service and quickly dealing with problems',
        'Handling cash and operating tills',
        'Maintaining the shop floor through cleaning and replenishing stock',
      ],
    },

    {
      date: '08/10 - 05/12',
      positionTitle: 'Volunteer at Cancer Research Charity Shop',
      details: [
        'Fundraiser: Planning new and interesting ideas to raise money within a team as well as organizing fundraising events on the high street',
        'Sales Assistant: Providing well-mannered customer service,',
        'Handling the cash machine and counting the profit',
        'managing, stocking and cleaning the shop floor',
        'Administrative skills when putting customer information into the subscription database',
      ],
    },
  ];
  renderDetails = details => details.map(d => <p>{d}</p>);

  renderContents = contents =>
    contents.map(c => (
      <div>
        <h3>
          {c.date} {c.positionTitle}
        </h3>
        <ul>{this.renderDetails(c.details)}</ul>
      </div>
    ));

  render() {
    return (
      <div className="CV">
        <a href="CVSheerlin.pdf" type="application/pdf">
          {' '}
          View my resume in PDF here!{' '}
        </a>
        <header>
          <h1>Resume</h1>
        </header>
        <body className="CV-body">
          <p>Experience</p>
          {this.renderContents(this.workContent)}
          <p> Education </p>
          {this.renderContents(this.educationContent)}
        </body>
      </div>
    );
  }
}

export default Resume;

// import React, { Component } from 'react';
// import { Document, Page } from 'react-pdf/dist/entry.webpack';

// class Resume extends Component {
//   state = {
//     numPages: null,
//     pageNumber: 1,
//   };

//   onDocumentLoadSuccess = ({ numPages }) => {
//     this.setState({ numPages });
//   };

//   render() {
//     const { pageNumber, numPages } = this.state;

//     return (
//       <div>
//         <Document
//           file="CVSheerlin.pdf"
//           onLoadSuccess={this.onDocumentLoadSuccess}
//         >
//           <Page pageNumber={pageNumber} />
//         </Document>
//         <p>
//           Page {pageNumber} of {numPages}
//         </p>
//       </div>
//     );
//   }
// }
// export default Resume;
