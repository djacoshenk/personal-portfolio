import { useState } from 'react';
import * as Sentry from '@sentry/react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { Link } from 'react-router-dom';
import validator from 'validator';

import { firestore } from 'setupFirebase';

import 'components/ContactSection.css';

type ContactFormInputTypes = {
  [name: string]: string;
  first_name: string;
  last_name: string;
  email: string;
  subject: string;
  message: string;
};

type ContactFormErrorTypes = {
  [name: string]: string;
  first_name: string;
  last_name: string;
  email: string;
  subject: string;
  message: string;
};

const defaultContactFormValues = {
  first_name: '',
  last_name: '',
  email: '',
  subject: '',
  message: '',
};

const defaultContactFormErrorValues = {
  first_name: '',
  last_name: '',
  email: '',
  subject: '',
  message: '',
};

const SOCIAL = [
  {
    icon: SiGithub,
    color: '#f8f8f2',
    path: '',
  },
  {
    icon: SiLinkedin,
    color: '#8be9fd',
    path: '',
  },
];

export function ContactSection() {
  const [contactFormValues, setContactFormValues] = useState(
    defaultContactFormValues
  );
  const [contactFormErrorValues, setContactFormErrorValues] = useState(
    defaultContactFormErrorValues
  );
  const [contactFormSuccessMessage, setContactFormSucessMessage] = useState('');

  function checkEmptyValues(
    formValues: ContactFormInputTypes,
    errors: ContactFormErrorTypes
  ) {
    for (const name in formValues) {
      if (!formValues[name]) {
        errors[name] = 'Please fill out field';
      }
    }
  }

  function checkValidEmail(
    formValues: ContactFormInputTypes,
    errors: ContactFormErrorTypes
  ) {
    if (formValues.email) {
      if (!validator.isEmail(formValues.email)) {
        errors.email = 'Please provide a valid email';
      }
    }
  }

  function formHasErrors(errors: ContactFormErrorTypes) {
    const formErrorValues = Object.values(errors).filter(
      (val) => val.length > 0
    );

    return formErrorValues.length > 0;
  }

  async function trySubmittingForm(
    formValues: ContactFormInputTypes,
    errors: ContactFormErrorTypes
  ) {
    setContactFormErrorValues((prevState) => ({
      ...prevState,
      ...errors,
    }));

    if (!formHasErrors(errors)) {
      try {
        await firestore
          .collection('contacts')
          .doc()
          .set({
            ...formValues,
          });

        setContactFormSucessMessage('Thank you! Your message has been sent.');
      } catch (e) {
        Sentry.captureException(e);
      }
    }
  }

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const errorValues = { ...defaultContactFormErrorValues };

    checkEmptyValues(contactFormValues, errorValues);

    checkValidEmail(contactFormValues, errorValues);

    trySubmittingForm(contactFormValues, errorValues);
  }

  function handleContactFormValueChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void {
    const { name, value } = e.target;

    setContactFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <section id='contact' className='contact-container'>
      <h4 className='contact-heading'>Contact</h4>
      <div className='contact-form-container'>
        <form className='contact-form' onSubmit={handleFormSubmit}>
          <div className='contact-field-container'>
            <label htmlFor='first_name'>First name</label>
            <div className='contact-first-name-input'>
              <input
                id='first_name'
                name='first_name'
                value={contactFormValues.first_name}
                onChange={handleContactFormValueChange}
              />
            </div>
            <p className='contact-error'>{contactFormErrorValues.first_name}</p>
          </div>

          <div className='contact-field-container'>
            <label htmlFor='last_name'>Last name</label>
            <div className='contact-last-name-input'>
              <input
                id='last_name'
                name='last_name'
                value={contactFormValues.last_name}
                onChange={handleContactFormValueChange}
              />
            </div>
            <p className='contact-error'>{contactFormErrorValues.last_name}</p>
          </div>

          <div className='contact-field-container'>
            <label htmlFor='email'>Email</label>
            <div className='contact-email-input'>
              <input
                id='email'
                name='email'
                value={contactFormValues.email}
                onChange={handleContactFormValueChange}
              />
            </div>
            <p className='contact-error'>{contactFormErrorValues.email}</p>
          </div>

          <div className='contact-field-container'>
            <label htmlFor='subject'>Subject</label>
            <div className='contact-subject-input'>
              <input
                id='subject'
                name='subject'
                value={contactFormValues.subject}
                onChange={handleContactFormValueChange}
              />
            </div>
            <p className='contact-error'>{contactFormErrorValues.subject}</p>
          </div>

          <div className='contact-field-container'>
            <label htmlFor='message'>Message</label>
            <div className='contact-message-input'>
              <textarea
                id='message'
                name='message'
                value={contactFormValues.message}
                onChange={handleContactFormValueChange}
              ></textarea>
            </div>
            <p className='contact-error'>{contactFormErrorValues.message}</p>
          </div>

          <button type='submit' className='contact-form-btn'>
            Submit
          </button>

          <p className='contact-success'>{contactFormSuccessMessage}</p>
        </form>
      </div>

      <div className='contact-social-links'>
        {SOCIAL.map((social, index) => {
          return (
            <Link to={social.path} key={index} className='contact-social-link'>
              <social.icon color={social.color} size={32} />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
