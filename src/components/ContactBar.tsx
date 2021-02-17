import './ContactBar.scss';

export const ContactBar = () => {
  return (
    <div className='contact-bar-container'>
      <a href='https://github.com/djacoshenk' target='_blank' rel='noreferrer'>
        <i className='fab fa-github'></i>
      </a>
      <a
        href='https://linkedin.com/in/djacoshenk'
        target='_blank'
        rel='noreferrer'
      >
        <i className='fab fa-linkedin-in'></i>
      </a>
    </div>
  );
};
