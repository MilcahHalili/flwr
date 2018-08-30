import React, {Component} from 'react';
import userServ from '../../utils/userServ';
import '../Form/Form.css';

class LogInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (field, e) => {
    this.setState({
      // Using ES2015 Computed Property Names
      [field]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    userServ.login(this.state)
      .then(() => {
        this.props.handleLogin();
        this.props.history.push('/');
      })
      // invalid credentials - don't alert in YOUR app :)
      .catch(err => alert('Credentials no bueno.'));
  }

  render() {
    return (
      <div className="Form-div">
        <header className="Form-header">log in</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="Form-group">
            <div className="col-sm-12">
              <input type="email" className="Form-control" placeholder="Email" value={this.state.email} onChange={(e) => this.handleChange('email', e)} />
            </div>
          </div>
          <div className="Form-group">
            <div className="col-sm-12">
              <input type="password" className="Form-control" placeholder="Password" value={this.state.password} onChange={(e) => this.handleChange('password', e)} />
            </div>
          </div>
          <div className="Form-group">
            <div className="Form-submit-div">
              <button className="Form-submit-btn">log in</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default LogInForm;