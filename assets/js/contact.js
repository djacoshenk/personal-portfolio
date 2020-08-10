const btn = document.querySelector('button');
btn.addEventListener('click', highlightOnClick);

function highlightOnClick() {
  btn.style.backgroundColor = '#282a36';
  btn.style.color = '#ff79c6';
}
