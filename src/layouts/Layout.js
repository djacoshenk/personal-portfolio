import React, { Fragment } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/Seo';

import '../styles/styles.css';

export default function Layout({ children }) {
  return (
    <Fragment>
      <SEO />
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
}
