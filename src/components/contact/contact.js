import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import * as S from './contact.styles';

export const Contact = () => {
  // const recaptchaRef = React.createRef();
  const [gToken, setgToken] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleRecaptcha = (value) => {
    setgToken(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, message } = form;
    console.log(name, email, message);
    const isInvalidForm = name === '' || email === '' || message === '';

    const isIncompleteRecaptcha = !gToken;

    // if (message.length > 10) {
    //   alert('too long');
    //   return;
    // }
    // if no @ sign on email

    if (isIncompleteRecaptcha) {
      alert('please tick recaptcha');
      return;
    }

    // const CONTACT_URL = 'http://localhost:8080';
    fetch(process.env.REACT_APP_CONTACT_URL, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({ ...form, gToken }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .catch((error) => console.log('error', error))
      .then((response) => {
        if (response.status === 200) {
          // console.log('success & reset recapture');
          // recaptchaRef?.current?.reset();
        } else {
          // console.log('not success');
        }
      });
  };

  const success = false;
  return (
    <S.CheckeredFrame id="contact">
      <S.FormWrapper>
        <S.Subtitle>
          Ask a question or say hello!
          <br /> Contact me here ☺ ☻
        </S.Subtitle>
        {success && (
          <>
            <h1>Thank you for getting in touch!</h1>
            <p>
              Your message has been sent to my telegram successfully! I look
              forward to reading it and will get back to you soon.
            </p>
            <p>Have a nice day!</p>
            {/* <S.SubmitButton type="submit">Send another</S.SubmitButton> */}
          </>
        )}
        {!success && (
          <form onSubmit={handleSubmit}>
            <S.FormItem>
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                placeholder="(Required)"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </S.FormItem>
            <S.FormItem>
              <label>Email Address:</label>
              <input
                placeholder="(Required)"
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </S.FormItem>
            <S.FormItem>
              <label>Subject:</label>
              <input
                placeholder="(Optional)"
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
              />
            </S.FormItem>
            <S.FormItem>
              <label>Message:</label>
              <textarea
                placeholder="(Required)"
                type="text"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                spellCheck={true}
              />
            </S.FormItem>
            <S.SubmitArea>
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.REACT_APP_SITE_KEY}
                onChange={handleRecaptcha}
                size="compact"
              />
              <S.SubmitButton type="submit">Submit</S.SubmitButton>
            </S.SubmitArea>
          </form>
        )}
      </S.FormWrapper>
    </S.CheckeredFrame>
  );
};
