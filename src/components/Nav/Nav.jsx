import React, { Component } from 'react';
import { Link, } from 'react-router-dom';

// const Nav = (props) => {
//   let nav = props.user ?
//     <div>
//       <Link to='/topscores' className='Nav-link' >TOP SCORES</Link>
//       &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
//       <Link to='' className='Nav-link' >LOG OUT</Link>
//       &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
//       <span className='Nav-welcome'>WELCOME, {props.user.name}</span>
//     </div>
//     :
//     <div>
//       <Link to='/login' className='Nav-link'>LOG IN</Link>
//       &nbsp;&nbsp;|&nbsp;&nbsp;
//       <Link to='/signup' className='Nav-link'>SIGN UP</Link>
//     </div>;

//   return (
//     <div className='Nav'>
//       {nav}
//     </div>
//   );
// };

class Nav extends Component {
  render() {
    return (
      <div>
        <div>
          <ul className="">
            <li><Link to="/category">category</Link></li>
            <li><Link to="/mood">mood</Link></li>
          </ul>
        </div>
        <div>
          <ul className="">
            <li><Link to="/login" className='NavBar-link'>log in</Link></li>
            <li><Link to="/signup" className='NavBar-link'>sign up</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;