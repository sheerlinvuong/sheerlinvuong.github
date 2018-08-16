import React, { Component } from 'react';
import './contact.css';
import ReCaptcha from 'react-google-recaptcha';

class Contact extends Component {
  state = {
    form: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },

    gToken: '',
  };
  handleChange = event => {
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleRecaptcha = value => {
    console.log(value);
    this.setState({
      gToken: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, email, subject, message } = this.state.form;
    const { gToken } = this.state;

    const isInvalidForm = name === '' || email === '' || message === '';

    const isIncompleteRecaptcha = gToken === '';

    if (isInvalidForm) {
      alert('hey your form is incomplete, please answer all boxes');
      return;
    } // if no @ sign on email
    //message max 200 char
    //optional subject
    //(required) in box

    if (isIncompleteRecaptcha) {
      alert('please tick recaptcha');
      return;
    }

    const url = 'https://infinite-taiga-21063.herokuapp.com/';
    console.log(this.state);
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({ ...this.state.form, gToken }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .catch(error => console.log(error))
      .then(response => console.log(response));
    //.then(add reset recatpcta )
  };

  render() {
    return (
      <div className="form-wrapper">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              placeholder="(Required)"
              type="text"
              name="name"
              value={this.state.form.name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Email Address:</label>
            <input
              placeholder="(Required)"
              type="text"
              name="email"
              value={this.state.form.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Subject:</label>
            <input
              placeholder="(Optional)"
              type="text"
              name="subject"
              value={this.state.form.subject}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Message:</label>
            <textarea
              placeholder="(Required)"
              type="text"
              name="message"
              value={this.state.form.message}
              onChange={this.handleChange}
            />
          </div>

          <ReCaptcha
            className="recaptcha"
            ref="recaptcha"
            sitekey="6LdeiGYUAAAAAIAihGaRFl-FZBLqRXf8DhC7lu9h"
            onChange={this.handleRecaptcha}
          />
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
console.log('');

export default Contact;
