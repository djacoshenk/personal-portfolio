import { Fragment } from 'react';

import { NavBar } from './components/NavBar';
import { HomePage } from './components/HomePage';
import { ContactBar } from './components/ContactBar';

export const App = () => {
  return (
    <Fragment>
      <NavBar />
      <HomePage />
      <ContactBar />
    </Fragment>
  );
};
