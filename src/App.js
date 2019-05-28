import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import NavBar from './components/headerComponent/navBar.js';
import HomePage from './components/pages/homePage.js';
import Contact from './components/pages/contact/contact';
import { ContentSt, WrapperSt } from './App.styles';

class App extends Component {
  render() {
    return (
      <Router>
        <WrapperSt>
          <NavBar />
          <ContentSt>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </ContentSt>
        </WrapperSt>
      </Router>
    );
  }
}

export default App;
