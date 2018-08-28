import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import HomeView from './views/HomeView/HomeView';
import LogInView from './views/LogInView/LogInView';
import SignUpView from './views/SignUpView/SignUpView';
import userServ from './utils/userServ';
import Mood from './components/Mood/Mood';
import Category from './components/Category/Category';
import './App.css';
import './components/Btns/Btns.css';

class App extends Component {

  /*--- cb methods ---*/

  handleSignUp = () => {
    this.setState({ user: userServ.getUser() });
  }

  handleLogin = () => {
    this.setState({ user: userServ.getUser() });
  }

  /*--- lifecycle methods ---*/

  componentDidMount() {
    let user = userServ.getUser();
    this.setState({ user });
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Nav />
          <Switch>
            <Route exact path="/" render={
              () =>
                <HomeView />
            } />
            <Route exact path='/category' component={Category} />
            <Route exact path='/mood' component={Mood} />
            <Route exact path='/login' render={(props) =>
              <LogInView
                {...props}
                handleLogin={this.handleLogin}
              />
            } />
            <Route exact path='/signup' render={
              (props) =>
                <SignUpView
                  {...props}
                  handleSignUp={this.handleSignUp}
                />
            } />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
