import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

export default class ContactFormm extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
  };
  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.clearState();
  };
  clearState = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name..."
            name="name"
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            placeholder="Enter your number..."
            name="number"
            onChange={this.handleChange}
          ></input>
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}
