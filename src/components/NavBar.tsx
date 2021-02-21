import { useState } from 'react';
import Switch from 'react-switch';
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';

import { setTheme } from 'reducers/themeReducer';
import { RootState } from 'store/index';

import logoBlack from 'assets/logo-black.svg';
import logoWhite from 'assets/logo-white.svg';

import './NavBar.scss';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export function NavBar() {
  const { theme } = useTypedSelector((state) => state.theme);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  const toggleTheme = () => {
    if (theme === 'light') {
      dispatch(setTheme('dark'));
      setChecked(true);
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    } else {
      dispatch(setTheme('light'));
      setChecked(false);
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }
  };

  return (
    <div className='nav-bar-container'>
      <img
        src={theme === 'light' ? logoBlack : logoWhite}
        className='logo'
        alt={theme === 'light' ? 'logo-light' : 'logo-dark'}
      />
      <Switch
        aria-label='theme-toggle'
        checked={checked}
        onChange={toggleTheme}
        onColor='#fff'
        onHandleColor='#fff'
        offHandleColor='#121212'
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
