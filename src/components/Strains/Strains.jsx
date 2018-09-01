import React from 'react';
import { Link } from 'react-router-dom';
import '../../views/App/App.css';

const Strains = (props) => {
  var strains = props.strains.map(s => (
    <li key={s.id}>
      <Link to={`/strain/${s._id}`}>
        <p className="herb"><span role="img" aria-label="herb">🌿</span></p>
        {s.name}
      </Link>
    </li>
  ));
  return (
    <div>
      <div className="Btns-div">
        <ul>
          {strains}
        </ul>
      </div>
    </div>
  );
};

export default Strains;