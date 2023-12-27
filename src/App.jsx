// src/App.jsx
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  handleIncrease = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  handleDecrease = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      counter: 0,
    });
  };

  render() {
    return (
      <div className="app">
        <h1>Counter App</h1>
        <div className="counter">{this.state.counter}</div>
        <div className="buttons">
          <button onClick={this.handleIncrease}>Increase</button>
          <button onClick={this.handleDecrease}>Decrease</button>
          <button onClick={this.handleReset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default App;
