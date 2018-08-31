import React, {Component} from 'react';
import StrainForm from '../../components/StrainForm/StrainForm';

class AddStrainView extends Component {
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
      <StrainForm
        {...this.props}
        updateMsg={this.updateMsg}
        handleAddStrain={this.props.handleAddStrain}
      />
      <p>{this.state.messsage}</p>
    </div>
  );
}
};

export default AddStrainView;