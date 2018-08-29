import React from 'react';
import {Link} from 'react-router-dom';
import DispensaryAPI from '../../utils/dispenAPI'

const Dispensaries = () => (
  <div>
    <ul>
      {
        DispensaryAPI.all().map(d => (
          <li key={d.id}>
            <Link to={`/dispensary/${d.id}`}>{d.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

export default Dispensaries;