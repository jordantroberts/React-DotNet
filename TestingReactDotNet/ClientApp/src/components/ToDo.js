﻿import React, { Component } from "react";

export class ToDo extends Component {

    state = {
      newItem: "",
      list: []
    };
  
  updateInput(key, value) {
    // update react state
    this.setState({
      [key]: value
    });
  }

  addItem() {
    // create item with unique id
    const newItem = {
      id: 1 + Math.random(), // so we get a new random id each time
      value: this.state.newItem.slice()
    };

    // copy of current list of items
    const list = [...this.state.list];

    // add new item to the list
    list.push(newItem);

    // update the state with the new list and reset newItem
    this.setState({
      list,
      newItem: ""
    });
  }

  deleteItem(id) {
    // copy of current list of items
    const list = [...this.state.list];

    // filter out the item that is being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });
  }

  render() {
    return (
      <center>
        <div className="App">
          <div>
            Add an Item...
            <br />
            <input
              type="text"
              placeholder="Type item here..."
              value={this.state.newItem}
              onChange={e => this.updateInput("newItem", e.target.value)}
            />
            <button onClick={() => this.addItem()}>Add</button>
            <br />
            <ul>
              {this.state.list.map(item => {
                return (
                  <li key={item.id}>
                    {item.value}
                    <button onClick={() => this.deleteItem(item.id)}>X</button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </center>
    );
  }
}

