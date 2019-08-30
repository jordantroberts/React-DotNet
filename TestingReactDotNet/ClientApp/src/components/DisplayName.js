import React, { Component } from "react";

export class DisplayName extends Component {
  state = {
    name: "",
    greeting: ""
  };

  updateInput(key, value) {
    this.setState({
      [key]: value
    });
  }

  calculate() {
    fetch("api/DisplayName/Greeting?name=" + encodeURIComponent(this.state.name))
      .then(response => response.text())
      .then(data => {
        this.setState({ greeting: data });
      });
  }

  render() {
    if ("" !== this.state.greeting) {
      // We already submitted the form, show welcome message
      return <h1>{this.state.greeting}</h1>;
    } else {
      return (
        <center>
          <div className="App">
            <div>
              Type a word...
              <br />
              <input
                type="text"
                placeholder="Type word here ..."
                value={this.state.name}
                onChange={e => this.updateInput("name", e.target.value)}
              />
              <button onClick={() => this.calculate()}>Submit</button>
              <br />
            </div>
          </div>
        </center>
      );
    }
  }
}
