import React, { Component } from 'react';
import './Mood.css';

class Mood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strains: []
    }
  }

  handleClick = () => {
  }

  render() {
    return (
      <div className="Btns-div">
        <h2 className="h2">choose your desired mood</h2>
        <button className="happy"
          onClick={() => this.handleClick()}>happy</button>
        <button className="giggly"
          onClick={() => this.handleClick()}>giggly</button>
        <button className="calm">calm</button>
        <button className="sleepy"
          onClick={() => this.handleClick()}>sleepy</button>
        <button className="happy">energized</button>
        <button className="giggly"
          onClick={() => this.handleClick()}>creative</button>
        <button className="calm">aroused</button>
        <button className="sleepy"
          onClick={() => this.handleClick()}>relaxed</button>
      </div>
    )
  }
}
export default Mood;