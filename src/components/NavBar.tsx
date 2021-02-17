import { useState } from 'react';
import Switch from 'react-switch';

import logoBlack from 'assets/logo-black.svg';

import './NavBar.scss';

export function NavBar() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className='nav-bar-container'>
      <img src={logoBlack} className='logo' alt='logo' />
      <Switch
        checked={darkTheme}
        onChange={() => setDarkTheme(!darkTheme)}
        onColor='#86d3ff'
        onHandleColor='#2693e6'
        handleDiameter={30}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)'
        activeBoxShadow='0px 0px 1px 10px rgba(0, 0, 0, 0.2)'
        height={20}
        width={48}
        className='react-switch'
        id='material-switch'
      />
    </div>
  );
}
