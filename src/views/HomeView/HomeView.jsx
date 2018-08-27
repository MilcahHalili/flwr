import React from 'react';
import Nav from '../../components/Nav/Nav';
import './HomeView.css';
import Header from '../../components/Header/Header';

const HomeView = () => {
  return (
    <div className="App">
      <Header />
      <Nav />
      <div className="App-intro content">
      </div>
      <div>

      </div>
      <div className="App-footer">
        <h2>made w <span role="img" aria-label="green-heart">💚</span><br />by <a href="https://www.linkedin.com/in/milcah-halili"><button className="mc">milcah halili</button></a></h2>
      </div>
    </div>
  )
}

export default HomeView;