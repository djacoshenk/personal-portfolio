import { Fragment } from 'react';
import { Provider } from 'react-redux';

import { NavBar } from './components/NavBar';
import { HomePage } from './components/HomePage';
import { ContactBar } from './components/ContactBar';

import { store } from 'store/index';

export const App = () => {
  return (
    <Fragment>
      <Provider store={store}>
        <NavBar />
        <HomePage />
        <ContactBar />
      </Provider>
    </Fragment>
  );
};
