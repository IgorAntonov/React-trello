import React from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route } from 'react-router-dom';
import { injectGlobal } from 'styled-components';

import { GreetingPage } from '../GreetingPage';

const App = () => (
  <Switch>
    <Route exact path="/" component={GreetingPage} />
  </Switch>
);

export const HotApp = hot(module)(App);

// eslint-disable-next-line no-unused-expressions
injectGlobal`
html, body {
  font-size: 16px;
  font-family: 'Roboto';
  background-color: #fafafa;
}

* {
    box-sizing: border-box;
  }

a {
  text-decoration: none;
}
`;
