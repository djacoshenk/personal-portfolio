import React from 'react';

function ContactForm({
  formValues,
  errorValues,
  handleFormValues,
  handleEmailValidation,
  handleFormValidation,
}) {
  return (
    <form
      className='contact-form'
      id='contact-form'
      name='Contact Form'
      method='POST'
      data-netlify='true'
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
  );
}

export default ContactForm;
