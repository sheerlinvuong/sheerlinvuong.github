import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
  handleSubmit = event => {
    event.preventDefault();
    console.log({ target: event.target });
    console.log(event.target[0].value);
    console.log(event.target.elements.username.value);
    console.log(this.inputNode.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="username"
            ref={node => {
              this.inputNode = node;
            }}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Contact;
