import React, {Component} from 'react';
import DispensaryForm from '../../components/DispensaryForm/DispensaryForm';

class AddDispensaryView extends Component {
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
      <DispensaryForm
        {...this.props}
        updateMsg={this.updateMsg}
        handleAddDispen={this.props.handleAddDispen}
      />
      <p>{this.state.messsage}</p>
    </div>
  );
}
};

export default AddDispensaryView;