import React, {Component} from 'react';
import dispenServ from '../../utils/dispenServ';

class DispensaryForm extends Component {
  constructor(props) {
    super(props);
      this.state = {
        name: '',
        address: ''
      };
  }

  handleChange = (field, e) => {
    this.setState({
      // Using ES2015 Computed Property Names
      [field]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    dispenServ.addDispen(this.state)
    .then(() => {
      this.props.handleAddDispen();
      this.props.history.push('/:id');
    })
    .catch(err => this.props.updateMsg(err.message));
  }

  render() {
    return (
      <div>
        <header className="header-footer">Add Dispensary</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="Name" value={this.state.name} onChange={(e) => this.handleChange('name', e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="Address" value={this.state.address} onChange={(e) => this.handleChange('address', e)} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default"
              // disabled={this.isFormInvalid()}
              >Add</button>&nbsp;&nbsp;
            </div>
          </div>
        </form>
      </div>
    );
  }

}

export default DispensaryForm;