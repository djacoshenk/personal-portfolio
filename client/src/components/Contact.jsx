import React, { useState } from 'react';

const defaultFormValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const defaultErrorValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const changeErrorValues = {
  name: 'Please enter a name.',
  email: 'Please enter a valid email.',
  subject: 'Please enter a subject.',
  message: 'Please enter a message.',
};

function Contact() {
  const [formValues, setFormValues] = useState(defaultFormValues);
  const [errorValues, setErrorValues] = useState(defaultErrorValues);

  const emailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  function handleFormValidation(e) {
    // track form errors
    let errors = 0;

    // check if any of the form values are empty, if so show the error
    for (const [name, value] of Object.entries(formValues)) {
      if (value === '') {
        errors++;
        e.preventDefault();

        setErrorValues((prevState) => ({
          ...prevState,
          [name]: changeErrorValues[name],
        }));
      }
    }

    if (errors === 0) {
      setFormValues(defaultFormValues);
    }
  }

  function handleEmailValidation(e) {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });

    if (!emailFormat.test(value)) {
      setErrorValues((prevState) => ({
        ...prevState,
        [name]: changeErrorValues[name],
      }));
    } else {
      setErrorValues((prevState) => ({
        ...prevState,
        [name]: defaultErrorValues[name],
      }));
    }
  }

  function handleFormValues(e) {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });

    if (value === '') {
      setErrorValues((prevState) => ({
        ...prevState,
        [name]: changeErrorValues[name],
      }));
    } else {
      setErrorValues((prevState) => ({
        ...prevState,
        [name]: defaultErrorValues[name],
      }));
    }
  }

  return (
    <article className='contact-container' id='contact'>
      <h2 className='contact-container-title'>Contact</h2>
      <form
        className='contact-form'
        id='contact-form'
        name='Contact Form'
        method='POST'
        data-netlify='true'
        action='./success.html'
        onSubmit={handleFormValidation}
      >
        <div className='name'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            value={formValues.name}
            onChange={handleFormValues}
          />
          <div>{errorValues.name}</div>
        </div>
        <div className='email'>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            id='email'
            value={formValues.email}
            onChange={handleEmailValidation}
          />
          <div>{errorValues.email}</div>
        </div>
        <div className='subject'>
          <label htmlFor='subject'>Subject</label>
          <input
            type='text'
            name='subject'
            id='subject'
            value={formValues.subject}
            onChange={handleFormValues}
          />
          <div>{errorValues.subject}</div>
        </div>
        <div className='message'>
          <label htmlFor='message'>Message</label>
          <textarea
            style={{ resize: 'none' }}
            name='message'
            id='message'
            value={formValues.message}
            onChange={handleFormValues}
          ></textarea>
          <div>{errorValues.message}</div>
        </div>
        <button type='submit' name='submit' id='submit'>
          Submit
        </button>
      </form>
    </article>
  );
}

export default Contact;
