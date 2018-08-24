import React, { Component } from 'react';
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
          <h1 className="App-title">flwr</h1>
        </header>
        <div>
        </div>
        <Nav />
        <div className="App-intro content">
          <Route path="/category" component={Category} />
          <Route path="/mood" component={Mood} />
        </div>
        <div className="App-footer">
          <h2>made w <span role="img" aria-label="green-heart">💚</span><br />by<a href="https://www.linkedin.com/in/milcah-halili"><button className="mc">milcah halili</button></a></h2>
        </div>
      </div>
    );
  }
}

export default App;
