import React, { Component } from 'react';
import './Resume.css';

// class Resume extends Component {
//   educationContent = [
//     {
//       date: '2014 - 2017',
//       positionTitle: 'Swansea University',
//       details: [
//         'Electrical and Electronic Engineering (BEng): First Class Honours (1st)',
//       ],
//     },

//     {
//       date: '2012 – 2014',
//       positionTitle: 'Lambeth Academy Sixth Form',
//       details: ['A-levels: Mathematics, Chemistry, Physics'],
//     },
//   ];
//   workContent = [
//     {
//       date: 'June 2018 - Present: ',
//       positionTitle: ' “WhoDat” - Celebrity facial recognition app',
//       details: [
//         '• Designed and implemented first mobile app.',
//         '• Integrated Amazon AWS “Rekognition” API.',
//         '• Fast development strategy, implemented working concept in a week.',
//         '• Created celebrity face data set by implementing imdb web scraper.',
//         '• Obtained working command of javascript and frameworks (React Native, Express).',
//       ],
//     },

//     {
//       date: 'November 2016 - March 2017: ',
//       positionTitle:
//         '“Modelling 3D Cities Using Online Data” (Dissertation) at Swansea University',
//       details: [
//         ' Awarded W Renwick Prize for the Best Software-based Project by Swansea College of Engineering',
//         '• Directed the project plan and set measurable targets to enable successful project completion.',
//         '• Obtained working command of Python.',
//         '• Demonstrated ability to design and implement software solutions; from researching APIs, data parsing to graphical data representation.',
//       ],
//     },

//     {
//       date: '2016:',
//       positionTitle: '“Micromouse” (Group Project) at Swansea University',
//       details: [
//         '• Demonstrated good group communication and coordination to create an obstacle avoiding robot.',
//         '• Exposure to low level programming of microcontrollers.',
//         '• Obtained working knowledge of C.',
//       ],
//     },

//     {
//       date: 'October 2015 – April 2017: ',
//       positionTitle: 'Student Ambassador at Swansea University',
//       details: [
//         '• Representing the university on open/visit days and ensuring a lively and positive experience.',
//         '• Offer insightful guidance for prospective students and parents.',
//       ],
//     },

//     {
//       date: 'August 2010 - May 2012: ',
//       positionTitle: 'Volunteer at Cancer Research Charity Shop',
//       details: [
//         '• Fundraiser: Strategized new and interesting ideas to raise money within a team as well as organizing fundraising events on the high street.',
//         '• Sales Assistant: Communicating and assisting with well-mannered customer service.',
//       ],
//     },
//   ];
//   skillsContent = [
//     {
//       date: null,
//       positionTitle: '',
//       details: [
//         '• Javascript​ (Node.js, Express, React, React Native )',
//         '• Python (Matplotlib, Numpy, VPython)',
//         '• HTML, CSS',
//       ],
//     },
//   ];
//   renderDetails = details => details.map(d => <p>{d}</p>);

//   renderContents = contents =>
//     contents.map(c => (
//       <div>
//         <p className="date"> {c.date} </p>
//         <h5 className="positionTitle">{c.positionTitle}</h5>{' '}
//         <ul>{this.renderDetails(c.details)}</ul>
//       </div>
//     ));

//   render() {
//     return (
//       <div>
//         <header>
//           <a href="CVSheerlin.pdf" type="application/pdf">
//             {' '}
//             View my resume in PDF here!{' '}
//           </a>
//           <h1>Resume</h1>
//         </header>
//         <body className="CV-body">
//           <h5>Skills </h5>
//           {this.renderContents(this.skillsContent)}
//           <h5>Experience </h5>

//           {this.renderContents(this.workContent)}
//           <h5> Education </h5>
//           {this.renderContents(this.educationContent)}
//         </body>
//       </div>
//     );
//   }
// }

//import { Document } from 'react-pdf/dist/entry.noworker';

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
