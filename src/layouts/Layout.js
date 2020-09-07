import React, { Fragment } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/styles.scss';

function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
}

export default Layout;