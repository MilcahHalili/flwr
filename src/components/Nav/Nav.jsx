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
          <Link to='/strains' className='Nav-link' >rare strains</Link>
          &nbsp;&nbsp;
          <Link to='/addstrain' className='Nav-link' >add rare strain</Link>
          &nbsp;&nbsp;
          <Link to='' className='Nav-link' onClick={props.handleLogout}>log out</Link>
          <br />
          <Link to='/category' className='Nav-link' >category</Link>
          &nbsp;&nbsp;
          <Link to='/mood' className='Nav-link' >mood</Link>
        </nav>
      </div>
    </div>
    :
    <div>
      <div className="Nav-div">
        <nav className="Nav-bar">
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