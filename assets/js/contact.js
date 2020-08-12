const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

function formValidate(e) {
  e.preventDefault();

  if (name.value === '' || name.value == null) {
    name.focus();
    name.lastElementChild.innerHTML = 'Please enter a name.';
    return false;
  } else if (email.value === '' || email.value == null) {
    email.focus();
    email.lastElementChild.innerHTML = 'Please enter a valid email.';
    return false;
  } else if (subject.value === '' || subject.value == null) {
    subject.focus();
    subject.lastElementChild.innerHTML = 'Please enter a subject.';
    return false;
  } else if (message.value === '' || message.value == null) {
    message.focus();
    message.lastElementChild.innerHTML = 'Please enter a message.';
    return false;
  } else {
    break;
    return true;
  }
}

document.getElementById('submit').addEventListener('click', formValidate);
