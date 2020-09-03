import React from 'react';

import Header from './Header';
import Home from './Home';
import Blog from './Blog';
import Work from './Work';
import Contact from './Contact';
import Footer from './Footer';

import '../styles/App.scss';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Work />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
