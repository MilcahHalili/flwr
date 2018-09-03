import React, { Component } from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import HomeView from '../HomeView/HomeView';
import LogInView from '../LogInView/LogInView';
import SignUpView from '../SignUpView/SignUpView';
import SendMsgView from '../SendMsgView/SendMsgView';
import userServ from '../../utils/userServ';
import msgServ from '../../utils/msgServ';
import Mood from '../../components/Mood/Mood';
import Category from '../../components/Category/Category';
import './App.css';
import '../../components/Btns/Btns.css';
import Dispensary from '../../components/Dispensary/Dispensary';
import Dispensaries from '../../components/Dispensaries/Dispensaries';
import Strain from '../../components/Strain/Strain';
import Strains from '../../components/Strains/Strains';
import AddStrainView from '../AddStrainView/AddStrainView';
import strainAPI from '../../utils/strainsAPI';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      dispensary: this.dispensary,
      mood: this.mood,
      strains: [],
    };
  }

  getStrainById = (id) => {
    return this.state.strains.find(s => s._id === id);
  }

  /*--- cb methods ---*/

  handleSignUp = () => {
    this.setState({ user: userServ.getUser() });
  }

  handleLogin = () => {
    this.setState({ user: userServ.getUser() });
  }


  handleLogout = () => {
    userServ.logout();
    this.setState({ user: null });
  }

  handleSendMsg = () => {
    this.setState({ msg: msgServ.sendMsg() });
  }

  handleAddStrain = (strain) => {
    this.setState((prevState) => ({
      strains: [...prevState.strains, strain]
    }));
  }
  // handleAddDispen = () => {
  //   this.setState({ dipensary: dispenServ.addDispen() });
  // }

  // handleHappy = () => {
  //   this.setState({ mood: strainServ.filterHappy() });
  // }

  /*--- lifecycle methods ---*/

  componentDidMount() {
    let user = userServ.getUser();
    this.setState({ user });
    strainAPI.all()
      .then(strains => this.setState({ strains }));
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Nav
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <Switch>
          <Route exact path="/" render={
            () =>
              <HomeView />
          } />
          <Route exact path='/category' component={Category} />
          <Route exact path="/mood" component={Mood} />
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
          <Route exact path='/dispensaries' render={
            (props) =>
              <Dispensaries
                {...props}
              />
          } />
          <Route exact path='/addstrain' render={
            (props) => (
              this.state.user ? 
                <AddStrainView
                  {...props}
                  handleAddStrain={this.handleAddStrain}
                />
              :
                <Redirect to='/login' />
            )
          } />
          <Route exact path='/dispensary/:id' render={
            (props) =>
              <Dispensary
                {...props}
              />
          } />
          <Route exact path='/strains' render={
            (props) =>
              <Strains
                {...props}
                strains={this.state.strains}
              />
          } />
          <Route exact path='/strain/:id' render={
            (props) =>
              <Strain
                {...props}
                getStrainById={this.getStrainById}
              />
          } />
          <Route exact path='/send/message' render={
            (props) =>
              <SendMsgView
                {...props}
                handleSendMsg={this.handleSendMsg}
              />
          } />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;