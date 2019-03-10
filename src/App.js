import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ""
    };
  }

  handleClick = () => {
    this.setState({ result: "Hi" });
  }

  render() {
    return (
      <div className="App">
        <p className="Result">{this.state.result}</p>
        <button onClick={this.handleClick} className="FlipCoinButton">Flip Coin</button>
      </div>
    );
  }
}

export default App;
