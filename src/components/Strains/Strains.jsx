import React from 'react';
import { Link } from 'react-router-dom';
import '../../views/App/App.css';

const Strains = (props) => {
  var strains = props.strains.map((s, index) => (
    <li key={index}>
      <Link to={`/strain/${s._id}`}>
        <p className="herb"><span role="img" aria-label="herb">🌿</span></p>
        {s.name}
      </Link>
    </li>
  ));
  return (
    <div className="Btns-div">
      <h2 className="h2">choose your desired mood</h2>
      <button className="happy">happy</button>
      <button className="giggly">giggly</button>
      <button className="calm">calm</button>
      <button className="sleepy">sleepy</button>
      <button className="happy">energized</button>
      <button className="giggly">creative</button>
      <button className="calm">aroused</button>
      <button className="sleepy">relaxed</button>
      <div>
        <div className="Btns-div">
          <ul>
            {strains}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Strains;