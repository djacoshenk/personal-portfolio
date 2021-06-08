import { useEffect, useState } from 'react';

import { v4 as uuid } from 'uuid';

import 'components/Commits.css';

export function Commits() {
  const [tick, setTick] = useState(0);

  const COMMITSCOL = Array(52).fill(0);
  const COMMMITSBOX = Array(7).fill(0);

  function getRandomColor() {
    const COLORS = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'];
    const randomIndex = Math.floor(Math.random() * COLORS.length);
    return COLORS[randomIndex];
  }

  useEffect(() => {
    const tickId = setInterval(() => {
      setTick(tick + 1);
    }, 2000);

    return () => clearInterval(tickId);
  }, [tick]);

  return (
    <div className='commits-container'>
      {COMMITSCOL.map(() => {
        return (
          <div className='commits-col' key={uuid()}>
            {COMMMITSBOX.map(() => {
              return (
                <div
                  className='commits-box'
                  key={uuid()}
                  style={{ backgroundColor: getRandomColor() }}
                ></div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
