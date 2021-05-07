import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { WrapperSt } from './App.styles';
import HomePage from './components/pages/homePage.js';
import { FunPage } from './components/pages/funPage';
import { WormyWorm } from './components/worm/worm';

const App = () => {
  let location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <WrapperSt>
      <WormyWorm isActive={isHomePage} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/fun" component={FunPage} />
      </Switch>
    </WrapperSt>
  );
};
export default App;
