import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

const Header = (props) => {
  return (
    <header className="Header">
      <Link to="/"><h1 className="Header-title">flwr</h1></Link>
    </header>
  );
}

export default Header;