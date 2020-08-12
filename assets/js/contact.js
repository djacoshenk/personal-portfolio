const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const form = document.getElementById('contact-form');
const formInput = document.getElementsByTagName('input');
const formTextArea = document.getElementsByTagName('textarea');

function validateForm(e) {
  let errors = 0;

  if (name.value === '' || name.value == null) {
    errors++;
    name.parentElement.lastElementChild.innerHTML = 'Please enter a name.';
  }

  if (email.value === '' || email.value == null) {
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

  if (target.value === '' || name.value == null) {
    switch (target) {
      case name:
        name.parentElement.lastElementChild.innerHTML = 'Please enter a name.';
        break;
      case email:
        email.parentElement.lastElementChild.innerHTML =
          'Please enter a valid email.';
        break;
      case subject:
        subject.parentElement.lastElementChild.innerHTML =
          'Please enter a subject.';
        break;
      case message:
        message.parentElement.lastElementChild.innerHTML =
          'Please enter a message.';
        break;
    }
  }

  if (target.value.length > 0) {
    target.parentElement.lastElementChild.innerHTML = '';
  }
}

form.addEventListener('submit', validateForm);

[...formInput, ...formTextArea].forEach((input) =>
  input.addEventListener('focus', formListener)
);

[...formInput, ...formTextArea].forEach((input) =>
  input.addEventListener('input', formListener)
);
