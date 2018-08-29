import React from 'react';
import {Link} from 'react-router-dom';
import StrainsAPI from '../../utils/strainsAPI';

const Strains = () => (
  <div>
    <ul>
      {
        StrainsAPI.all().map(s => (
          <li key={s.id}>
            <Link to={`/strain/${s.id}`}>{s.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

export default Strains;