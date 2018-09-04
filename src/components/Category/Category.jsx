import React from 'react';
import {Link} from 'react-router-dom';

const Category = () => {
  return (
    <div className="Btns-div">
      <h2 className="h2">find your favorite strains</h2>
      <Link to="/sativa">
        <button className="happy">sativa</button>
      </Link>
      <Link to="/hybrid">
        <button className="giggly">hybrid</button>
      </Link>
      <Link to="/sativa">
        <button className="calm">indica</button>
      </Link>
      {/* <button className="sleepy">cbd</button> */}
    </div>
  )
}

export default Category;