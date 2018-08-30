import React, {Component} from 'react';
import msgServ from '../../utils/msgServ';
import '../Form/Form.css';

class LogInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
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
    msgServ.sendMsg(this.state)
      .then(() => {
        this.props.handleSendMsg();
        this.props.history.push('/');
      })
      // invalid credentials - don't alert in YOUR app :)
      .catch(err => alert('Message did not send.'));
  }

  render() {
    return (
      <div className="Form-div">
        <header className="Form-header">SMS Notifications</header>
        <p>Use this form to send SMS notifications to any subscribers.</p>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="Form-group">
            <div className="col-sm-12">
              <input type="text" name="message" placeholder="Write your message here." className="Form-control" value={this.state.message} onChange={(e) => this.handleChange('message', e)} />
            </div>
          </div>
          <div className="Form-group">
            <div className="Form-submit-div">
              <button className="Form-submit-btn">Send</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default LogInForm;

// extends layout

// block content
//   h1 SMS Notifications

//   p.
//     Use this form to send MMS notifications to any subscribers.

//   form(action='/message/send', method='POST')

//     // The text of the message to send
//     .form-group
//       label(for='message') Enter a message
//       input.form-control(type='text', name='message',
//         placeholder='Hi there, gorgeous ;)')

//     // An optional image URL
//     .form-group
//       label(for='imageUrl') (Optional) Image URL to send in an MMS
//       input.form-control(type='text', name='imageUrl',
//         placeholder='http://fake.twilio.com/some_image.png')

//     button.btn.btn-primary(type='submit') Send Yourself a Message!