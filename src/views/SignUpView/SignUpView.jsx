import React, {Component} from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

class SignUpView extends Component {
  constructor(props) {
    super(props);
    this.state = {messsage: ''}
  }

  updateMsg = (msg) => {
    this.setState({messsage: msg});
  }

  render() {
  return (
    <div>
      <SignUpForm
        {...this.props}
        updateMsg={this.updateMsg}
        handleSignUp={this.props.handleSignUp}
      />
      <p>{this.state.messsage}</p>
    </div>
  );
}
};

export default SignUpView;