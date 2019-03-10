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
    fetch("https://entropysector.com/hwrng/api/v1/public/numbers/1")
      .then(response => response.json())
      .then(result => this.processNumber(result["data"][0]));
  }

  processNumber = (number) => {
    this.setState({ result: number });
  }

  render() {
    return (
      <div className="App">
        <h1>Entropy Sector<br />Coin Flip</h1>
        <p className="Result">{this.state.result}</p>
        <button onClick={this.handleClick} className="FlipCoinButton">Flip Coin</button>
      </div>
    );
  }
}

export default App;
