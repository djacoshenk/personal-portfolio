import React from 'react';
import Link from 'gatsby-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className='footer'>
      <nav className='social-links'>
        <Link
          to='https://github.com/djacoshenk'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        <Link
          to='https://linkedin.com/in/dannyjacoshenk'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
      </nav>
    </footer>
  );
}
