/**
 * Root file
 */
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as Routes from './Router';

import Layout from 'components/Layout';

import 'style/test.css';


ReactDOM.render(
  <Router>
    <Layout>
      <Switch>
        <Route exact path='/' component={Routes.Home} />
        <Route path='/about' component={Routes.About} />
      </Switch>
    </Layout>
  </Router>,
  document.getElementById('root')
);