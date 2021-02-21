import { useSelector, TypedUseSelectorHook } from 'react-redux';

import { RootState } from 'store/index';

import './ContactBar.scss';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const ContactBar = () => {
  const { theme } = useTypedSelector((state) => state.theme);

  return (
    <div className='contact-bar-container'>
      <a
        aria-label='github-logo-link'
        href='https://github.com/djacoshenk'
        target='_blank'
        rel='noreferrer'
      >
        {theme === 'light' ? (
          <i className='fab fa-github light'></i>
        ) : (
          <i className='fab fa-github dark'></i>
        )}
      </a>
      <a
        aria-label='linkedin-logo-link'
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
