import React, { Component } from 'react';
import './RollDiceDemo.css';

class RollDiceDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      result: null,
      error: null
    };

    this.handleClick();
  }

  handleClick = () => {
    this.setState({ 
      error: null,
      loading: true,
      result: null 
    });
    fetch("https://entropysector.com/hwrng/api/v1/public/numbers/3")
      .then(response => response.json())
      .then(result => this.processNumbers(result["data"]))
      .catch(error => this.processError(error));
  }

  processNumbers = (numbers) => {
    const result = numbers
      .map(x => x + 2147483648)
      .map(x => (x % 6))
      .map(x => Math.abs(x))
      .map(x => x + 1); // 1 to 6

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
    var numbers = this.state.result;
    var errorMessage = this.state.error;

    var diceImages = null;
    if (numbers) {
      var diceUrls = numbers.map(x => `images/6die-${x}.png`);

      diceImages = (
        <div className="Result">
          <img src={diceUrls[0]} />
          <img src={diceUrls[1]} />
          <img src={diceUrls[2]} />
        </div>
      );
    }

    return (
      <div className="RollDiceDemo">
        <h2>Dice Roll</h2>

        <div className="Result">
          {diceImages}
        </div>

        <button onClick={this.handleClick} className="FlipCoinButton">
          {this.state.loading ? "Loading..." : "Roll Dice"}
        </button>

        {errorMessage ? <p className="Error">{errorMessage}</p> : null}
      </div>
    );
  }
}

export default RollDiceDemo;
