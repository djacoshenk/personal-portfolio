import { HiOutlineArrowCircleDown } from 'react-icons/hi';
import { HashLink } from 'react-router-hash-link';

import { Commits } from 'components/Commits';

import 'components/HeroSection.css';

export function HeroSection() {
  return (
    <section className='hero-container'>
      <h2 className='hero-primary-title'>Hi, I&apos;m Danny</h2>

      <h3 className='hero-secondary-title'>I&apos;m a Frontend Developer</h3>

      <Commits />

      <HashLink className='hero-down-link' smooth to='/#work'>
        <HiOutlineArrowCircleDown size={64} />
      </HashLink>
    </section>
  );
}
