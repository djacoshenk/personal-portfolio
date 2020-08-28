import React from 'react';

function Home() {
  let hasCommits = false;

  function getRandomColor() {
    const colors = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  function fillCommits() {
    // if there are commits, remove them before appending new commits
    if (hasCommits) {
      removeCommits();
    }

    // each loop will create a column and populate it with colored boxes
    for (let i = 0; i < 20; i++) {
      // create a column to be filled with boxes
      const commitsCol = document.createElement('div');
      commitsCol.className = 'commits-col';
      commits.appendChild(commitsCol);

      // create boxes in the column and style them
      for (let j = 0; j < 7; j++) {
        const commitsBox = document.createElement('div');
        commitsBox.className = 'commits-box';
        commitsBox.style.backgroundColor = getRandomColor();
        commitsCol.appendChild(commitsBox);
      }
    }

    hasCommits = true;
  }

  function removeCommits() {
    for (let i = 0; i < 20; i++) {
      const commitsCol = document.querySelector('.commits-col');
      commits.removeChild(commitsCol);
    }
  }

  return (
    <article className='home-container'>
      <p>
        Hello, my name is <span>Danny Jacoshenk</span>.
      </p>
      <p>I'm a Front End Developer.</p>
      <div class='commits'></div>
    </article>
  );
}

export default Home;
