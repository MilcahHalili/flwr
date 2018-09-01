import React from 'react';
import { Link, } from 'react-router-dom';
import './Nav.css';

const Nav = (props) => {
  let nav = props.user ?
    <div>
      <span role="img" aria-label="brown hand waving" className="Nav-welcome">High, {props.user.name}! 👋🏽</span>
      <br />
      <div className="Nav-div">
        <nav className="Nav-bar">
          <Link to='/strains' className='Nav-link' >strains</Link>
          <Link to='/category' className='Nav-link' >category</Link>
          <Link to='/mood' className='Nav-link' >mood</Link>
          <br />
          <Link to='/addstrain' className='Nav-link' >add strain</Link>
          <Link to='/dispensaries' className='Nav-link' >dispensaries</Link>
          <br />
          <Link to='' className='Nav-link' onClick={props.handleLogout}>log out</Link>
        </nav>
      </div>
    </div>
    :
    <div>
      <div className="Nav-div">
        <nav className="Nav-bar">
          <Link to='/strains' className='Nav-link' >strains</Link>
          <br />
          <Link to='/login' className='Nav-link'>log in</Link>
          <Link to='/signup' className='Nav-link'>sign up</Link>
        </nav>
      </div>
    </div >;

  return (
    <div className="Nav">
      {nav}
    </div>
  );
};

export default Nav;