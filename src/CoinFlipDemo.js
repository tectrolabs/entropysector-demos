import React, { Component } from 'react';
import './CoinFlipDemo.css';

class CoinFlipDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      result: null,
      error: null
    };
  }

  handleClick = () => {
    this.setState({ 
      error: null,
      loading: true,
      result: null 
    });
    fetch("https://entropysector.com/hwrng/api/v1/public/numbers/1")
      .then(response => response.json())
      .then(result => this.processNumber(result["data"][0]))
      .catch(error => this.processError(error));
  }

  processNumber = (number) => {
    const positiveNumber = number + 2147483648;
    const heads = (positiveNumber % 2 == 1);
    const result = heads ? "heads" : "tails";
    this.setState({ 
      error: null,
      loading: false,
      result: result 
    });
  }

  processError = (error) => {
    this.setState({ 
      error: error.message, 
      loading: false 
    });
  }

  render() {
    var resultImageUrl = this.state.result ? `images/quarter-${this.state.result}.png` : null;
    var errorMessage = this.state.error;

    return (
      <div className="CoinFlipDemo">
        <h2>Coin Flip</h2>
        <div className="Result">
          {resultImageUrl ? <img src={resultImageUrl}/> : null}
        </div>

        <button onClick={this.handleClick} className="FlipCoinButton">
          {this.state.loading ? "Loading..." : "Flip Coin"}
        </button>

        {errorMessage ? <p className="Error">{errorMessage}</p> : null}
      </div>
    );
  }
}

export default CoinFlipDemo;
