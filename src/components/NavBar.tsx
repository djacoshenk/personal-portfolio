import logoBlack from 'assets/logo-black.svg';

import './NavBar.scss';

export const NavBar = () => {
  return (
    <div className='nav-bar-container'>
      <img src={logoBlack} className='logo' alt='logo' />
    </div>
  );
};
