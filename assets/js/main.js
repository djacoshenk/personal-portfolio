const commits = document.querySelector('.commits');

const colors = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'];

function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function fillCommits() {
  // if a commits-col div exists, run the removeCommits function
  if (document.querySelector('.commits-col')) {
    removeCommits();
  }

  // removeCommits();

  // each loop will create a column and populate it with colored boxes
  for (let i = 0; i < 20; i++) {
    // create a column
    let commitsCol = document.createElement('div');
    commitsCol.className = 'commits-col';
    commits.appendChild(commitsCol);

    // create boxes in the column
    for (let j = 0; j < 7; j++) {
      let commitsBox = document.createElement('div');
      commitsBox.className = 'commits-box';
      commitsBox.style.backgroundColor = getRandomColor();
      commitsCol.appendChild(commitsBox);
    }
  }
}

function removeCommits() {
  for (let i = 0; i < 20; i++) {
    let commitsCol = document.querySelector('.commits-col');
    commits.removeChild(commitsCol);
  }
}

document.addEventListener('load', fillCommits());
document.addEventListener('load', setInterval(fillCommits, 1000));
