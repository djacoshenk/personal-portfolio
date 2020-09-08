import React from 'react';
import shortid from 'shortid';

export default function Commits() {
  function getRandomColor() {
    const colors = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  // main commits container to be displayed
  const commits = [];

  // create 20 columns of commit boxes
  for (let i = 0; i < 20; i++) {
    // create an array of commit boxes
    const commitsBox = [];

    // create 7 commit boxes and assign random color
    for (let j = 0; j < 7; j++) {
      commitsBox.push(
        React.createElement('div', {
          className: 'commits-box',
          style: { backgroundColor: getRandomColor() },
          key: shortid.generate(),
        })
      );
    }

    // append the commits boxes to a commits column
    const commitsCol = React.createElement(
      'div',
      { className: 'commits-col', key: shortid.generate() },
      [commitsBox]
    );

    // push the commits column with the commits boxes children to the main commits container
    commits.push(commitsCol);
  }

  return <div className='commits'>{commits}</div>;
}
