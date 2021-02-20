import { useSelector, TypedUseSelectorHook } from 'react-redux';

import { RootState } from 'store/index';

import './ContactBar.scss';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const ContactBar = () => {
  const { theme } = useTypedSelector((state) => state.theme);

  return (
    <div className='contact-bar-container'>
      <a href='https://github.com/djacoshenk' target='_blank' rel='noreferrer'>
        {theme === 'light' ? (
          <i id='github-logo' className='fab fa-github light'></i>
        ) : (
          <i id='github-logo' className='fab fa-github dark'></i>
        )}
      </a>
      <a
        href='https://linkedin.com/in/djacoshenk'
        target='_blank'
        rel='noreferrer'
      >
        {theme === 'light' ? (
          <i id='linkedin-logo' className='fab fa-linkedin-in light'></i>
        ) : (
          <i id='linkedin-logo' className='fab fa-linkedin-in dark'></i>
        )}
      </a>
    </div>
  );
};
