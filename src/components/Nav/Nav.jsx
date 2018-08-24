import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
        <div>
          <ul className="">
            <li><Link to="/category">category</Link></li>
            <li><Link to="/mood">mood</Link></li>
          </ul>
        </div>
    );
  }
}

export default Nav;