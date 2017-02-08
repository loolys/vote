import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App/App.js';
import About from './components/About/About.js'

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
  </Router>
);

export default Routes;
