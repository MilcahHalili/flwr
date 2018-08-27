import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import HomeView from './views/HomeView/HomeView';
import LogInView from './views/LogInView/LogInView';
import SignUpView from './views/SignUpView/SignUpView';
import userServ from './utils/userServ';

class App extends Component {

  /*--- cb methods ---*/

  handleSignUp = () => {
    this.setState({ user: userServ.getUser() });
  }

  handleLogin = () => {
    this.setState({user: userService.getUser()});
  }

  /*--- lifecycle methods ---*/

  componentDidMount() {
    let user = userServ.getUser();
    this.setState({ user });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={
            () =>
              <HomeView />
          } />
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
      </BrowserRouter>
    );
  }
}

export default App;
