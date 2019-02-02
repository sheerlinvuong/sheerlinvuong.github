import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Switch } from 'react-router-dom';
//import { browserHistory } from 'react-router';
import NavBar from './components/headerComponent/navBar.js';
import SocialIcons from './components/socialIcons/SocialIcons';
import HomePage from './components/pages/homePage.js';
import Contact from './components/pages/contact/contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <NavBar />
          <div className="content">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/contact" component={Contact} />
            </Switch>
            <SocialIcons />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
