import React, { Component } from 'react';
import './Resume.css';

class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <a href="https://docs.google.com/document/d/e/2PACX-1vSPfhlCn3jT_rJogzc7pNLOWmrBEkgPsEqMhlFPqfxrPAk5gQbI1Z-i1soawnuBcZa_5B48rVC9H9ek/pub">
          {' '}
          Download my resume in PDF here! <br />
          <br />
        </a>

        <p className="resume-bio">
          With a strong technical background in electronics and an affinity to
          software, I enjoy learning and implementing new technologies. I’m a
          beginner to the world of web development and I look to further grow in
          an exciting environment.
        </p>

        <p className="resume-header">
          <b>Skills</b>
        </p>

        <p className="resume-text">
          - <b>Javascript​ </b> (Node.js, Express, React, React Native,
          Mongoose)
          <br />- <b>Python​</b> (Matplotlib, Numpy, VPython)
          <br />- <b> HTML, CSS </b>
        </p>

        <p className="resume-header">
          <b>Experience</b>
        </p>

        <p className="resume-header">
          June 2018 - Present :{' '}
          <b>“WhoDat” - Celebrity facial recognition app</b>
        </p>

        <p className="resume-text">
          - Designed and implemented first mobile app <br />- Integrated Amazon
          AWS “Rekognition” API
          <br />- Fast development strategy, implemented working concept in a
          week.
          <br />- Created celebrity face data set by implementing imdb web
          scraper.
          <br />- Obtained working command of javascript and frameworks (React
          Native, Express).
        </p>

        <p className="resume-header">
          November 2016 - March 2017:{' '}
          <b>“Modelling 3D Cities Using Online Data” </b> (Dissertation) at
          Swansea University
        </p>

        <p className="resume-text">
          Awarded W Renwick Prize for the Best Software-based Project by Swansea
          College of Engineering <br />- Directed the project plan and set
          measurable targets to enable successful project completion. <br />-
          Obtained working command of Python. <br />- Demonstrated ability to
          design and implement software solutions; from researching APIs, data
          parsing to graphical data representation.
        </p>

        <p className="resume-header">
          2016: <b>“Micromouse” (Group Project) </b>
          at Swansea University
        </p>

        <p className="resume-text">
          - Demonstrated good group communication and coordination to create an
          obstacle avoiding robot.
          <br />- Exposure to low level programming of microcontrollers.
          <br />- Obtained working knowledge of C.
        </p>

        <p className="resume-header">
          October 2015 – April 2017: <b>Student Ambassador</b> at Swansea
          University
        </p>

        <p className="resume-text">
          - Representing the university on open/visit days and ensuring a lively
          and positive experience.
          <br />- Offer insightful guidance for prospective students and
          parents.
        </p>

        <p className="resume-header">
          August 2010 - May 2012: <b> Sales Assistant </b>
          at Cancer Research Charity Shop
        </p>

        <p className="resume-text">
          - Fundraiser: Strategized new and interesting ideas to raise money
          within a team as well as organizing fundraising events on the high
          street.
          <br />- Sales Assistant: Communicating and assisting with
          well-mannered customer service.
        </p>

        <p className="resume-header">
          <b>Education</b>
        </p>
        <p className="resume-header">
          2014 – 2017: Swansea University Electrical and Electronic Engineering
          (BEng)
          <br />
          <b>First Class Honours (1​st​)</b>
          <br />
          <br />
          2012 – 2014: Lambeth Academy Sixth Form
          <br />
          A-levels: Mathematics, Chemistry, Physics
        </p>
      </div>
    );
  }
}
export default Resume;
