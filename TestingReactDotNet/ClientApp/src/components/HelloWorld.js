
import React, { Component } from 'react';

export class HelloWorld extends Component {

    constructor(props) {
        super(props);
        this.state = { message: ""};

        fetch('api/HelloWorld/Message')
            //.then(response => response.json())
            //.then(data => {
            //this.setState({ message: data });
            .then(response => response.text())          // convert to plain text
            //.then(text => console.log(text))
            .then(data => {
                this.setState({ message: data });
            });
       // });

    }

  render () {
      return (
    
            <h1>{this.state.message} </h1>
       
    );
  }
}