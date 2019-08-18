
import React, { Component } from "react";

export class Date extends Component {
  constructor(props) {
    super(props);
    this.state = { date: "" };

    fetch("api/Date/GetDate")
      .then(response => response.text())
      .then(data => {
        this.setState({ date: data });
      });
  }

  render() {
    return <h1>{this.state.date} </h1>;
  }
}
