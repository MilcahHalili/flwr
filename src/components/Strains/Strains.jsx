import React from 'react';
import { Link } from 'react-router-dom';
import StrainsAPI from '../../utils/strainsAPI';
import '../../views/App/App.css';

const Strains = () => (
  <div>
    <div className="Index-div">
      <ul className="Index-ul">
        {
          StrainsAPI.all().map(s => (
            <li key={s.id}>
              <Link to={`/strain/${s.id}`}>
                <p className="herb"><span role="img" aria-label="herb">🌿</span></p>
                {s.name}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  </div>
)

export default Strains;