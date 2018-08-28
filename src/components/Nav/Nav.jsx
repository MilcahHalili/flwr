import React, { Component } from 'react';
import { Link, } from 'react-router-dom';

const Nav = (props) => {
  let nav = props.user ?
    <div>
      <span className='Nav-welcome'>High, {props.user.name}! 👋🏽</span>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/category' className='Nav-link' >category</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/mood' className='Nav-link' >mood</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to="" className='Nav-link' onClick={props.handleLogout} >log out</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    </div>
    :
    <div>
      <Link to='/login' className='Nav-link'>log in</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='Nav-link'>sign up</Link>
    </div>;

  return (
    <div className='Nav'>
      {nav}
    </div>
  );
};

export default Nav;