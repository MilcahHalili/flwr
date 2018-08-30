import React, { Component } from 'react';

const selectedBtn = {
  backgroundColor: 'purple',
  color: 'white'
};

const plainBtn = {
  backgroundColor: 'white',
  color: 'purple'
};

class Mood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mood: null
    }
  }

  handleClick = (mood) => {
    this.setState({ mood });
  }

  render() {
    return (
      <div>
        <h2 className="App-h2">choose your desired mood</h2>
        <button className="happy"
        onClick={() => this.handleClick("happy")}>happy</button>
        <button className="giggly">giggly</button>
        <button className="calm">calm</button>
        <button className="sleepy">sleepy</button>
        <button className="happy">energized</button>
        <button className="giggly">creative</button>
        <button className="calm">aroused</button>
        <button className="sleepy">relaxed</button>
        <div>
          <p>{this.state.mood}</p>
        </div>
      </div>
    )
  }
}
export default Mood;