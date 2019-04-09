import React, {Component} from 'react';
import userServ from '../../utils/userServ';
import '../Form/Form.css';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      countryCode: '+1',
      phone: '',
      password: '',
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

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userServ.signup(this.state);
      // Let <App> know a user has signed up!
      this.props.handleSignUp();
      // Successfully signed up - show GamePage
      this.props.history.push('/');
    } catch (err) {
      // Invalid user data (probably duplicate email)
      this.props.updateMsg(err.message);
    }
  }

  isFormInvalid() {
    return !(this.state.name
      && this.state.email
      && this.state.password
      === this.state.pwConfirm);
  }

  render() {
    return (
      <div className="Form-div">
        <header className="Form-header">sign up</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="Form-group">
            <div className="col-sm-12">
              <input type="text" className="Form-control" placeholder="Name" value={this.state.name} onChange={(e) => this.handleChange('name', e)} />
            </div>
          </div>
          <div className="Form-group">
            <div className="col-sm-12">
              <input type="email" className="Form-control" placeholder="Email" value={this.state.email} onChange={(e) => this.handleChange('email', e)} />
            </div>
          </div>
          <div className="Form-group">
            <div className="col-sm-12">
              <select className="Form-control" id='authy-countries' value={this.state.countryCode} onChange={(e) => this.handleChange('countryCode', e)}>
                <option value="+1">USA</option>
              </select>
            </div>
          </div>
          <div className="Form-group">
            <div className="col-sm-12">
              <input type="text" className="Form-control" placeholder="510-420-2470" value={this.state.phone} onChange={(e) => this.handleChange('phone', e)} />
            </div>
          </div>
          <div className="Form-group">
            <div className="col-sm-12">
              <input type="password" className="Form-control" placeholder="Password" value={this.state.password} onChange={(e) => this.handleChange('password', e)} />
            </div>
          </div>
          <div className="Form-group">
            <div className="col-sm-12">
              <input type="password" className="Form-control" placeholder="Confirm Password" value={this.state.pwConfirm} onChange={(e) => this.handleChange('pwConfirm', e)} />
            </div>
          </div>
          <div className="Form-group">
            <div className="col-sm-12">
              <input type="text" className="Form-control" placeholder="Zip Code" value={this.state.zipcode} onChange={(e) => this.handleChange('zipcode', e)} />
            </div>
          </div>
          <div className="Form-group">
            <div className="Form-submit-div">
              <button className="Form-submit-btn" disabled={this.isFormInvalid()}>sign up</button>&nbsp;&nbsp;
            </div>
          </div>
        </form>
      </div>
    );
  }

};

export default SignUpForm;