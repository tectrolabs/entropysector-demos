import React, { Component } from 'react';
import './App.css';
import CoinFlipDemo from './CoinFlipDemo';
import RollDiceDemo from './RollDiceDemo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      result: null,
      error: null
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Entropy Sector Demos</h1>
        <CoinFlipDemo />
        <RollDiceDemo />
        <p>Powered by <a href="https://tectrolabs.com/swiftrng/">SwiftRNG</a>
      </div>
    );
  }
}

export default App;
