import React from 'react';

function Footer() {
  return (
    <footer className='footer'>
      <nav className='social-links'>
        <a
          href='https://github.com/djacoshenk'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-github'></i>
        </a>
        <a
          href='https://linkedin.com/in/dannyjacoshenk'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-linkedin-in'></i>
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
