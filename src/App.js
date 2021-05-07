import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { WrapperSt } from './App.styles';
import HomePage from './components/pages/homePage.js';
import { Gallery } from './components/pages/gallery';
import { WormyWorm } from './components/worm/worm';

const App = () => {
  let location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <WrapperSt>
      <WormyWorm isActive={isHomePage} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/gallery" component={Gallery} />
      </Switch>
    </WrapperSt>
  );
};
export default App;
