import React, { Component } from 'react';
import './Mood.css';
import { Link } from 'react-router-dom';

class Mood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strains: []
    }
  }

  render() {
    return (
      <div className="Btns-div">
        <h2 className="h2">find your desired mood</h2>
        <Link to="/happy">
          <button className="happy">happy</button>
        </Link>
        <Link to="/energetic">
          <button className="happy">energetic</button>
        </Link>
        <Link to="/relaxed">
          <button className="sleepy">relaxed</button>
        </Link>
        <Link to="/sleepy">
          <button className="sleepy">sleepy</button>
        </Link>
        {/* <button className="giggly">giggly</button> */}
        {/* <button className="calm">calm</button> */}
        {/* <button className="giggly">creative</button>
        <button className="calm">aroused</button> */}
      </div>
    )
  }
}
export default Mood;