import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { ContentSt, WrapperSt } from './App.styles';
import HomePage from './components/pages/homePage.js';
import { WormyWorm } from './components/worm/worm';

const App = () => {
  return (
    <Router>
      <WrapperSt>
        {/* <WormyWorm /> */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* <Route path="/fun" component={HomePage} /> */}
        </Switch>
      </WrapperSt>
    </Router>
  );
};
export default App;
