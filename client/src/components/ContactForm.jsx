import React from 'react';

function ContactForm() {
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

  return (
    <article class='contact-container'>
      <form
        class='contact-form'
        id='contact-form'
        name='Contact Form'
        method='POST'
        data-netlify='true'
        action='./success.html'
      >
        <div class='name'>
          <label for='name'>Name</label>
          <input type='text' name='name' id='name' />
          <div></div>
        </div>
        <div class='email'>
          <label for='email'>Email</label>
          <input type='text' name='email' id='email' />
          <div></div>
        </div>
        <div class='subject'>
          <label for='subject'>Subject</label>
          <input type='text' name='subject' id='subject' />
          <div></div>
        </div>
        <div class='message'>
          <label for='message'>Message</label>
          <textarea
            style='resize: none;'
            name='message'
            id='message'
          ></textarea>
          <div></div>
        </div>
        <button type='submit' name='submit' id='submit'>
          Submit
        </button>
      </form>
    </article>
  );
}

export default ContactForm;
