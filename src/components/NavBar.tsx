import { useState } from 'react';

import logoBlack from 'assets/logo-black.svg';
import menuBlack from 'assets/menu-black.svg';

import './NavBar.scss';

export const NavBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div className='nav-bar-container'>
      <img src={logoBlack} className='logo' alt='logo' />
      <button
        className='hamburger-menu'
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        <img src={menuBlack} className='menu-logo' alt='menu-logo' />
      </button>
      {menuIsOpen && (
        <div className='nav-bar-links-mobile'>
          <a href='#home'>Home</a>
          <a href='#work'>Work</a>
          <a href='#contact'>Contact</a>
        </div>
      )}
      <div className='nav-bar-links-dom'>
        <a href='#home'>Home</a>
        <a href='#work'>Work</a>
        <a href='#contact'>Contact</a>
      </div>
    </div>
  );
};
