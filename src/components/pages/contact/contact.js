import React, { Component } from 'react';
import './contact.css';
import ReCaptcha from 'react-google-recaptcha';

class Contact extends Component {
  state = {
    form: {
      name: '',
      email: '',
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
    const { name, email, message } = this.state.form;
    const { gToken } = this.state;

    const isInvalidForm = name === '' || email === '' || message === '';

    const isIncompleteRecaptcha = gToken === '';

    if (isInvalidForm) {
      alert('hey your form is incomplete, please answer all boxes');
      return;
    }

    if (isIncompleteRecaptcha) {
      alert('please tick recaptcha');
      return;
    }

    const url = 'https://infinite-taiga-21063.herokuapp.com/';
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
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.form.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            email:
            <input
              type="text"
              name="email"
              value={this.state.form.email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            message:
            <input
              type="text"
              name="message"
              value={this.state.form.message}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        <ReCaptcha
          ref="recaptcha"
          sitekey="6LdeiGYUAAAAAIAihGaRFl-FZBLqRXf8DhC7lu9h"
          onChange={this.handleRecaptcha}
        />
      </div>
    );
  }
}

export default Contact;
