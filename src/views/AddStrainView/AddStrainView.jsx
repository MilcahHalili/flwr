import React, {Component} from 'react';
import AddStrainForm from '../../components/AddStrainForm/AddStrainForm';

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
      <AddStrainForm
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