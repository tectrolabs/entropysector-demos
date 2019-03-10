import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null
    };
  }

  handleClick = () => {
    fetch("https://entropysector.com/hwrng/api/v1/public/numbers/1")
      .then(response => response.json())
      .then(result => this.processNumber(result["data"][0]));
  }

  processNumber = (number) => {
    const heads = (number % 2 == 1);
    const result = heads ? "heads" : "tails";
    this.setState({ result: result });
  }

  render() {
    var resultImage = this.state.result ? `images/quarter-${this.state.result}.png` : null

    return (
      <div className="App">
        <h2>Entropy Sector<br />Coin Flip</h2>
        {resultImage ? <p className="Result"><img src={resultImage}/></p> : null}
        <button onClick={this.handleClick} className="FlipCoinButton">Flip Coin</button>
      </div>
    );
  }
}

export default App;
