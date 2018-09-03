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
      <ul>
        {strains}
      </ul>
    </div>
  );
};

export default Strains;