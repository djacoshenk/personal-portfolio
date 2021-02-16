import { Fragment } from 'react';

import { NavBar } from './components/NavBar';
import { HomePage } from './components/HomePage';

export const App = () => {
  return (
    <Fragment>
      <NavBar />
      <HomePage />
    </Fragment>
  );
};
