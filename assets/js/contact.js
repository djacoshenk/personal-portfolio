const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const form = document.getElementById('contact-form');
const formInput = document.getElementsByTagName('input');
const formTextArea = document.getElementsByTagName('textarea');
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function validateForm(e) {
  let errors = 0;

  if (name.value === '' || name.value == null) {
    errors++;
    name.parentElement.lastElementChild.innerHTML = 'Please enter a name.';
  }

  if (
    email.value === '' ||
    email.value == null ||
    !email.value.match(emailFormat)
  ) {
    errors++;
    email.parentElement.lastElementChild.innerHTML =
      'Please enter a valid email.';
  }

  if (subject.value === '' || subject.value == null) {
    errors++;
    subject.parentElement.lastElementChild.innerHTML =
      'Please enter a subject.';
  }

  if (message.value === '' || message.value == null) {
    errors++;
    message.parentElement.lastElementChild.innerHTML =
      'Please enter a message.';
  }

  if (errors > 0) {
    e.preventDefault();
  }
}

function formListener(e) {
  let target = e.currentTarget;

  if (target === name) {
    if (target.value === '' || name.value == null) {
      name.parentElement.lastElementChild.innerHTML = 'Please enter a name.';
    } else {
      name.parentElement.lastElementChild.innerHTML = '';
    }
  }

  if (target === email) {
    if (!email.value.match(emailFormat)) {
      email.parentElement.lastElementChild.innerHTML =
        'Please enter a valid email.';
    } else {
      email.parentElement.lastElementChild.innerHTML = '';
    }
  }

  if (target === subject) {
    if (target.value === '' || name.value == null) {
      subject.parentElement.lastElementChild.innerHTML =
        'Please enter a subject.';
    } else {
      subject.parentElement.lastElementChild.innerHTML = '';
    }
  }

  if (target === message) {
    if (target.value === '' || name.value == null) {
      message.parentElement.lastElementChild.innerHTML =
        'Please enter a message.';
    } else {
      message.parentElement.lastElementChild.innerHTML = '';
    }
  }
}

form.addEventListener('submit', validateForm);

[...formInput, ...formTextArea].forEach((input) =>
  input.addEventListener('focus', formListener)
);

[...formInput, ...formTextArea].forEach((input) =>
  input.addEventListener('input', formListener)
);
