
import React, { Component } from "react";

export class DisplayName extends Component {
    constructor(props) {
    super(props);
    this.state = {greeting: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({greeting: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.greeting);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.greeting} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}