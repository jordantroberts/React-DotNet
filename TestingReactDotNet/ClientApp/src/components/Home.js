import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Hello, world!</h1>
        <p>My name is Jordan. My favourite things are:</p>
        <ul>
          <li>Snowboarding</li>
          <li>Food</li>
          <li>Reading</li>
        </ul>
      </div>
    );
  }
}
