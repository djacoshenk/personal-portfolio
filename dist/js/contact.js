const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const form = document.getElementById('contact-form');
const formInput = document.getElementsByTagName('input');
const formTextArea = document.getElementsByTagName('textarea');
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Check to see that all fields have valid inputs
function validateForm(e) {
  let errors = 0;

  if (name.value === '' || name.value == null) {
    errors++;
    name.nextElementSibling.innerHTML = 'Please enter a name.';
  }

  if (
    email.value === '' ||
    email.value == null ||
    !email.value.match(emailFormat)
  ) {
    errors++;
    email.nextElementSibling.innerHTML = 'Please enter a valid email.';
  }

  if (subject.value === '' || subject.value == null) {
    errors++;
    subject.nextElementSibling.innerHTML = 'Please enter a subject.';
  }

  if (message.value === '' || message.value == null) {
    errors++;
    message.nextElementSibling.innerHTML = 'Please enter a message.';
  }

  if (errors > 0) {
    e.preventDefault();
  }
}

// Listen for user actions - 'focus' and 'input'
function formListener(e) {
  let target = e.target;

  if (target === name) {
    if (target.value === '' || name.value == null) {
      name.nextElementSibling.innerHTML = 'Please enter a name.';
    } else {
      name.nextElementSibling.innerHTML = '';
    }
  }

  if (target === email) {
    if (!email.value.match(emailFormat)) {
      email.nextElementSibling.innerHTML = 'Please enter a valid email.';
    } else {
      email.nextElementSibling.innerHTML = '';
    }
  }

  if (target === subject) {
    if (target.value === '' || name.value == null) {
      subject.nextElementSibling.innerHTML = 'Please enter a subject.';
    } else {
      subject.nextElementSibling.innerHTML = '';
    }
  }

  if (target === message) {
    if (target.value === '' || name.value == null) {
      message.nextElementSibling.innerHTML = 'Please enter a message.';
    } else {
      message.nextElementSibling.innerHTML = '';
    }
  }
}

// Check if form is valid on submit
form.addEventListener('submit', validateForm);

// Add a 'focus' event listener to each input and textarea element
[...formInput, ...formTextArea].forEach((input) =>
  input.addEventListener('focus', formListener)
);

// Add an 'input' event listener to each input and textarea element
[...formInput, ...formTextArea].forEach((input) =>
  input.addEventListener('input', formListener)
);
