import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import * as S from './contact.styles';

export const Contact = () => {
  const [gToken, setgToken] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleRecaptcha = (value) => {
    setgToken(value);
  };

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    // const { name, email, message } = form;
    // const isInvalidForm = name === '' || email === '' || message === '';
    // console.log(validateEmail(email));
    const isIncompleteRecaptcha = !gToken;

    if (isIncompleteRecaptcha) {
      alert('please tick recaptcha');
      return;
    }

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
        if (response?.status === 200) {
          setSuccess(true);
        } else {
          // console.log('not success'); backup to email?
        }
      })
      .finally(setLoading(false));
  };

  return (
    <S.CheckeredFrame id="contact">
      <S.FormWrapper>
        {success && (
          <S.Success>
            <h1>Thank you for getting in touch!</h1>
            <p>
              Your message has been sent to my telegram successfully! I look
              forward to reading it and will get back to you soon.
            </p>
            <p>Have a nice day!</p>
          </S.Success>
        )}
        {!success && (
          <>
            <S.Subtitle>
              Ask a question or say hello!
              <br /> Contact me here ☺ ☻
            </S.Subtitle>
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
                  sitekey={process.env.REACT_APP_SITE_KEY}
                  onChange={handleRecaptcha}
                  size="compact"
                />
                <S.SubmitButton disabled={loading} type="submit">
                  Submit
                </S.SubmitButton>
              </S.SubmitArea>
            </form>
          </>
        )}
      </S.FormWrapper>
    </S.CheckeredFrame>
  );
};
