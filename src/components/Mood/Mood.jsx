import React, { Component } from 'react';
import './Mood.css';

class Mood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strains: []
    }
  }

  handleClick = (strain) => {
    this.setState({ strain });
  }

  render() {
    return (
      <div className="Btns-div">
        <h2 className="h2">choose your desired mood</h2>
        <button className="happy"
          onClick={() => this.handleClick("Jack Herer")}>happy</button>
        <button className="giggly"
          onClick={() => this.handleClick("Jack Herer")}>giggly</button>
        <button className="calm">calm</button>
        <button className="sleepy"
          onClick={() => this.handleClick("Rock Bud")}>sleepy</button>
        <button className="happy">energized</button>
        <button className="giggly"
          onClick={() => this.handleClick("Jack Herer")}>creative</button>
        <button className="calm">aroused</button>
        <button className="sleepy"
          onClick={() => this.handleClick("Rock Bud")}>relaxed</button>
        <div>
          <p className="Mood-p">
            <span role="img" aria-label="herb" className="herb">🌿</span>
            <br />
            <span className="Mood-span">{this.state.strain}</span>
          </p>
        </div>
      </div>
    )
  }
}
export default Mood;