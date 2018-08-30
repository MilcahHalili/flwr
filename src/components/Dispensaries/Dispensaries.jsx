import React from 'react';
import { Link } from 'react-router-dom';
import DispensaryAPI from '../../utils/dispenAPI'
import '../../views/App/App.css';

const Dispensaries = () => (
  <div className="Index-div">
    <ul className="Index-ul">
      {
        DispensaryAPI.all().map(d => (
          <li key={d.id}>
            <Link to={`/dispensary/${d.id}`}>
              <p><span role="img" aria-label="green cross" className="cross">➕</span></p>
              {d.name}
            </Link>
          </li>
        ))
      }
    </ul>
  </div>
)

export default Dispensaries;