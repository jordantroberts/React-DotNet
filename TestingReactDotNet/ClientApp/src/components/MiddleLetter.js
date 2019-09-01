
import React, { Component } from "react"; 

export class MiddleLetter extends Component {

    state = {
        word: "",
        greeting: ""
    };

    updateInput(key, value) {
        this.setState({
            [key]: value
        });
    }

     calculate() {
       
    fetch("api/MiddleLetter/GetMiddle?word=" + encodeURIComponent(this.state.word))
      .then(response => response.text())
      .then(data => {
        this.setState({ greeting: data });
      });
  }

    render() {

          if ("" !== this.state.greeting) {
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
                            placeholder="Type a word here..."
                            value={this.state.word}
                            onChange={e => this.updateInput("word", e.target.value)}
                        />
                        <button onClick={() => this.calculate()}>Submit</button>
                        <br />
                    </div>
                </div>
            </center >
                );
        }
    }
}

 