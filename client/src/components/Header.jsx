import React from 'react';
import Link from 'gatsby-link';

function Header() {
  return (
    <header className='header'>
      <nav className='nav-bar'>
        <Link to='/#home'>Home</Link>
        <Link to='/#work'>Work</Link>
        <Link to='/#blog'>Blog</Link>
        <Link to='/#contact'>Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
