import React, {Component} from 'react';
import strainServ from '../../utils/strainServ';
import '../Form/Form.css';

class StrainForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      categories: '',
      moods: '',
      infoURL: ''
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
    strainServ.addStrain(this.state)
    .then((strain) => {
      this.props.handleAddStrain(strain);
      this.props.history.push('/');
    })
    .catch(err => this.props.updateMsg(err.message));
  }

  render() {
    return (
      <div className="Form-div">
        <header className="Form-header">add strain</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="Form-group">
            <div className="col-sm-12">
              <input type="text" className="Form-control" placeholder="Name" value={this.state.name} onChange={(e) => this.handleChange('name', e)} />
            </div>
          </div>
          <div className="Form-group">
            <div className="col-sm-12">
              <input type="text" className="Form-control" placeholder="indica, hybrid, sative, cbd" value={this.state.categories} onChange={(e) => this.handleChange('categories', e)} />
            </div>
          </div>
          <div className="Form-group">
            <div className="col-sm-12">
              <input type="text" className="Form-control" placeholder="happy, sleepy, creative" value={this.state.moods} onChange={(e) => this.handleChange('moods', e)} />
            </div>
          </div>
          <div className="Form-group">
            <div className="col-sm-12">
              <input type="text" className="Form-control" placeholder="https://www.leafly.com/indica/purple-punch" value={this.state.infoURL} onChange={(e) => this.handleChange('infoURL', e)} />
            </div>
          </div>
          <div className="Form-group">
            <div className="">
              <button className="Form-submit-btn">add strain</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default StrainForm;