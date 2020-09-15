import React, { useState, useEffect } from 'react';
import Commits from './Commits';

export default function Home() {
  const [time, setTime] = useState(Date.now());

  // triggers a re-render every second and display randomized commits
  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  return (
    <article className='home-container' id='home'>
      <p>
        Hello, my name is <span>Danny Jacoshenk</span>.
      </p>
      <p>I&#39;m a Front End Developer.</p>
      <Commits />
    </article>
  );
}
