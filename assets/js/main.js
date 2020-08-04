const commits = document.querySelector('.commits');
const commitsBox = document.querySelectorAll('.commits-box');
const colors = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'];

function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function fillCommits() {
  commitsBox.forEach((e) => (e.style.backgroundColor = getRandomColor()));
}

document.addEventListener('load', fillCommits());
document.addEventListener('load', setInterval(fillCommits, 1000));
