import React, { Component } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import * as S from './styles';
class Contact extends Component {
  state = {
    form: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    gToken: ''
  };
  recaptchaRef = React.createRef();
  handleChange = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value
      }
    });
  };

  handleRecaptcha = (value) => {
    // console.log(value);
    this.setState({
      gToken: value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, message } = this.state.form;
    const { gToken } = this.state;
    // const { recaptchaRef } = this.props;
    // const recaptchaValue = recaptchaRef?.current?.getValue();
    // console.log('recaptchaValue', recaptchaRef);
    const isInvalidForm = name === '' || email === '' || message === '';

    const isIncompleteRecaptcha = !gToken;

    if (isInvalidForm) {
      alert('Your form is incomplete, please answer the required fields');
      return;
    } // if no @ sign on email
    //message max 200 char

    if (isIncompleteRecaptcha) {
      alert('please tick recaptcha');
      return;
    }

    const url = 'https://infinite-taiga-21063.herokuapp.com/';
    // const url = 'http://localhost:8080';
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({ ...this.state.form, gToken }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .catch((error) => console.log('error', error))
      .then((response) => {
        // console.log('res', response);
        if (response.status === 200) {
          // console.log('success & reset recapture');
          // recaptchaRef?.current?.reset();
        } else {
          // console.log('not success');
        }
      });
  };

  render() {
    const { recaptchaRef } = this.props;
    return (
      <S.CheckeredFrame id="contact">
        <S.FormWrapper>
          <S.Subtitle>
            Ask a question or say hello!
            <br /> Contact me here ☺ ☻
          </S.Subtitle>
          <form onSubmit={this.handleSubmit}>
            <S.FormItem>
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                placeholder="(Required)"
                type="text"
                name="name"
                value={this.state.form.name}
                onChange={this.handleChange}
              />
            </S.FormItem>
            <S.FormItem>
              <label>Email Address:</label>
              <input
                placeholder="(Required)"
                type="text"
                name="email"
                value={this.state.form.email}
                onChange={this.handleChange}
              />
            </S.FormItem>
            <S.FormItem>
              <label>Subject:</label>
              <input
                placeholder="(Optional)"
                type="text"
                name="subject"
                value={this.state.form.subject}
                onChange={this.handleChange}
              />
            </S.FormItem>
            <S.FormItem>
              <label>Message:</label>
              <textarea
                placeholder="(Required)"
                type="text"
                name="message"
                value={this.state.form.message}
                onChange={this.handleChange}
              />
            </S.FormItem>
            <S.SubmitArea>
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LdeiGYUAAAAAIAihGaRFl-FZBLqRXf8DhC7lu9h"
                onChange={this.handleRecaptcha}
                size="compact"
              />
              <S.SubmitButton type="submit">Submit</S.SubmitButton>
            </S.SubmitArea>
          </form>
        </S.FormWrapper>
      </S.CheckeredFrame>
    );
  }
}

export default Contact;
