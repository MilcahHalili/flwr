import React from 'react';

const Category = (props) => {
  return (
    <div className="Btns-div">
      <h2 className="h2">choose your favorite strains</h2>
      <button className="sativa">sativa</button>
      <button className="hybrid">hybrid</button>
      <button className="indica">indica</button>
      <button className="cbd">cbd</button>
      <div>
        <p className="Mood-p">
          <span role="img" aria-label="herb" className="herb">🌿</span>
          <br />
          <span className="Mood-span"></span>
        </p>
      </div>
    </div>
  )
}

export default Category;