import React, {Component} from 'react';
import msgServ from '../../utils/msgServ';
import '../Form/Form.css';

class SendMsgForm extends Component {
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
              <textarea type="text" name="message" placeholder="Write your message here." className="Form-control-sendMsg" value={this.state.message} onChange={(e) => this.handleChange('message', e)} />
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

export default SendMsgForm;