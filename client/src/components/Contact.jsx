import React, { useState } from 'react';
import ContactForm from './ContactForm';

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

const emailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

function Contact() {
  const [formValues, setFormValues] = useState(defaultFormValues);
  const [errorValues, setErrorValues] = useState(defaultErrorValues);

  function handleFormValidation(e) {
    // track form errors
    let errors = 0;

    // check if any of the form values are empty, if so show the error
    for (const name in formValues) {
      if (formValues[name] === '') {
        errors++;

        setErrorValues((prevState) => ({
          ...prevState,
          [name]: changeErrorValues[name],
        }));
      }
    }

    if (errors === 0) {
      setFormValues((prevState) => ({ ...prevState, ...defaultFormValues }));
    } else {
      e.preventDefault();
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

    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));

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
      <ContactForm
        formValues={formValues}
        errorValues={errorValues}
        handleFormValues={handleFormValues}
        handleEmailValidation={handleEmailValidation}
        handleFormValidation={handleFormValidation}
      />
    </article>
  );
}

export default Contact;
