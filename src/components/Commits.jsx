import React from 'react';
import shortid from 'shortid';

const COMMITSCOL = Array(20).fill(0);
const COMMMITSBOX = Array(7).fill(0);

export default function Commits() {
  function getRandomColor() {
    const colors = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  return (
    <div className='commits'>
      {COMMITSCOL.map(() => {
        return (
          <div className='commits-col' key={shortid.generate()}>
            {COMMMITSBOX.map(() => {
              return (
                <div
                  className='commits-box'
                  key={shortid.generate()}
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
