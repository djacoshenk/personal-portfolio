import { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { HashLink } from 'react-router-hash-link';

import { ReactComponent as Logo } from 'assets/logo.svg';

import 'components/NavBar.css';

export function NavBar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <nav className='nav-bar-container'>
      <div className='nav-bar-logo-container'>
        <Logo height={32} width={32} />
        <h1 className='nav-bar-logo-title'>Hi, I&apos;m Danny</h1>
      </div>
      <button
        className={
          menuIsOpen ? 'nav-bar-burger-menu active' : 'nav-bar-burger-menu'
        }
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        {menuIsOpen ? <HiOutlineX size={32} /> : <HiOutlineMenu size={32} />}
      </button>
      <div className={menuIsOpen ? 'nav-bar-links mobile' : 'nav-bar-links'}>
        <HashLink className='nav-bar-link' to='/#work' smooth>
          Work
        </HashLink>
        <HashLink className='nav-bar-link' to='/#about' smooth>
          About
        </HashLink>
        <HashLink className='nav-bar-link' to='/#contact' smooth>
          Contact
        </HashLink>
      </div>
    </nav>
  );
}
