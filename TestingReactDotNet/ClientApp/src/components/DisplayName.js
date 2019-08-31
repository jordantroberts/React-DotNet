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
        // send parameters to ASP.NET backend with the fetch API: 
    fetch("api/DisplayName/Greeting?you=" + encodeURIComponent(this.state.name))
        // Use a query string - encodeURIComponent encodes a string to be inside the query string. 
        // There are some built in model binders in ASP.NET. Importantly, the query string model binder takes the query string parameters and pass them as arguments with the same name to the controller.
      .then(response => response.text())
      .then(data => {
        this.setState({ greeting: data });
      });
  }

    render() {
      // render the form if it's not submitted yet, else render the answer: 
    if ("" !== this.state.greeting) {
      // We already submitted the form, show welcome message
      return <h1>{this.state.greeting}</h1>;
    } else {
      return (
        <center>
          <div className="App">
            <div>
              What's your name?
              <br />
              <input
                type="text"
                placeholder="Type name here ..."
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
