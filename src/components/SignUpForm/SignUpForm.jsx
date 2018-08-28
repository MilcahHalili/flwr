import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import userServ from '../../utils/userServ';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      countryCode: '+1',
      mobilePhone: '',
      pw: '',
      pwConfirm: '',
      zipcode: ''
    };
  }

  handleChange = (field, e) => {
    this.props.updateMsg('');
    this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    userServ.signup(this.state)
    .then(() => {
      this.props.handleSignUp();
      this.props.history.push('/');
    })
    .catch(err => this.props.updateMsg(err.message));
  }

  isFormInvalid() {
    return !(this.state.name
      && this.state.email
      && this.state.pw
      === this.state.pwConfirm);
  }

  render() {
    return (
      <div>
        <header className="header-footer">Sign Up</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="Name" value={this.state.name} onChange={(e) => this.handleChange('name', e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="email" className="form-control" placeholder="Email" value={this.state.email} onChange={(e) => this.handleChange('email', e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <select className="form-control" default="USA" value={this.state.countryCode} onChange={(e) => this.handleChange('countryCode', e)}>
                <option value="+1">USA</option>
                <option value="+1">CANADA</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="Mobile Phone" value={this.state.mobilePhone} onChange={(e) => this.handleChange('mobilePhone', e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="form-control" placeholder="Password" value={this.state.pw} onChange={(e) => this.handleChange('pw', e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="form-control" placeholder="Confirm Password" value={this.state.pwConfirm} onChange={(e) => this.handleChange('pwConfirm', e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="Zip Code" value={this.state.zipcode} onChange={(e) => this.handleChange('zipcode', e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default" disabled={this.isFormInvalid()}>Sign Up</button>&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }

};

export default SignUpForm;