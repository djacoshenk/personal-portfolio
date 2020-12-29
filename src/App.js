import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from 'pages/HomePage/HomePage';
import WorkPage from 'pages/WorkPage/WorkPage';
import ContactPage from 'pages/ContactPage/ContactPage';

export default function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route exact path='/work'>
            <WorkPage />
          </Route>
          <Route exact path='/contact'>
            <ContactPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}
