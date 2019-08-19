import React, { Component } from "react";

export class DayToday extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "" };

    fetch("api/DayToday/GetDate")
      .then(response => response.text())
      .then(data => {
        this.setState({ message: data });
      });
  }

  render() {
    return <h1>{this.state.message} </h1>;
  }
}
