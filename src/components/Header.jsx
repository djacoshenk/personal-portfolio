import React from 'react';
import Link from 'gatsby-link';

export default function Header() {
  return (
    <header className='header'>
      <nav className='nav-bar'>
        <Link to='/'>Home</Link>
        <Link to='/work'>Work</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
    </header>
  );
}
