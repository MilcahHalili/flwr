import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Route
} from 'react-router-dom';
import './App.css';
import Category from './components/Category/Category';
import Mood from './components/Mood/Mood';
import Nav from './components/Nav/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
        </div>
        <Nav />
        <div className="App-intro content">
          <Route path="/category" component={Category} />
          <Route path="/mood" component={Mood} />
        </div>
      </div>
    );
  }
}

export default App;
