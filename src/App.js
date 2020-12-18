import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import NavBar from './components/headerComponent/navBar.js';
import HomePage from './components/pages/homePage.js';
// import Contact from './components/pages/contact/contact';
import { ContentSt, WrapperSt } from './App.styles';
import { WormyWorm } from './components/worm/worm';

const App = () => {
  return (
    <Router>
      <WrapperSt>
        <WormyWorm />
        <NavBar />
        <ContentSt>
          <Switch>
            <Route exact path="/" component={HomePage} />
            {/* <Route path="/contact" component={Contact} /> */}
          </Switch>
        </ContentSt>
      </WrapperSt>
    </Router>
  );
};
export default App;
