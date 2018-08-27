import React, { Component } from 'react';
import { Link, } from 'react-router-dom';

// const Nav = (props) => {
//   let nav = props.user ?
//     <div>
//       High, {props.user.name}.
//     <ul className="">
//         <li><Link to="/category">category</Link></li>
//         <li><Link to="/mood">mood</Link></li>
//       </ul>
//     </div> :
//     <div>
//       <ul className="">
//         <li><Link to="/login" className='NavBar-link'>log in</Link></li>
//         <li><Link to="/signup" className='NavBar-link'>sing up</Link></li>
//       </ul>
//     </div>

//   return (
//     <div className="">
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