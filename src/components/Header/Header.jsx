import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import '../../views/App/App.css';

const Header = () => {
  return (
    <header className="Header">
      <Link className="App-logo" to="/"><img src="https://i.imgur.com/sHhZ7de.png"/></Link>
    </header>
  );
}

export default Header;