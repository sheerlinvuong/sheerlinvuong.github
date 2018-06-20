import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Switch } from 'react-router-dom';
//import { browserHistory } from 'react-router';
import NavBar from './components/headerComponent/navBar.js';
import Footer from './components/footerComponent/footer.js';
import HomePage from './components/pages/homePage.js';
import Resume from './components/pages/resume/Resume';
import Projects from './components/pages/projects/projects';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          {/* <HomePage /> */}
          <NavBar className="nav" />

          <Switch className="content">
            <Route exact path="/" component={HomePage} />
            <Route path="/resume" component={Resume} />
            <Route path="/projects" component={Projects} />
          </Switch>

          <Footer className="footer" />
        </div>
      </Router>
    );
  }
}

export default App;
