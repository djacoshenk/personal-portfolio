import React from 'react';
import '../styles/App.scss';

import Header from './Header';
import Home from './Home';
import Blog from './Blog';
import Work from './Work';
import Contact from './Contact';
import Footer from './Footer';

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
