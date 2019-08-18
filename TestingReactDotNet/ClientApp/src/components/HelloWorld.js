import React, { Component } from "react";

export class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "" };

    fetch("api/HelloWorld/Message")
      .then(response => response.text())
      .then(data => {
        this.setState({ message: data });
      });
  }

  render() {
    return <h1>{this.state.message} </h1>;
  }
}
