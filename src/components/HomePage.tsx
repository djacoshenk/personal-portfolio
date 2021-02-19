import { Commits } from './Commits';

import './HomePage.scss';

export const HomePage = () => {
  return (
    <div className='home-page-container' id='#home'>
      <div className='home-page-title'>
        <h1>Hi, my name is Danny.</h1>
        <h1>I&#39;m a Front-End Developer.</h1>
      </div>
      <Commits />
    </div>
  );
};
