import React from 'react';
import { Link } from 'react-router-dom';
import '../../views/App/App.css';
import './Strain.css';

const Strain = (props) => {
  var strain = props.getStrainById(props.match.params.id);
  if (!strain) return null;
  return (
    <div>
      <div className="Strain-div">
        <h2 className="h2">{strain.name}</h2>
        <div className="Strain-img-cont">
          <img className="Strain-img" src={strain.imgURL} alt="cannabis" />
        </div>
        <p className="Strain-p">Moods:<br />
          {strain.moods}</p>
        <p className="Strain-p">Categories:<br />
          {strain.categories}</p>
        <p className="Strain-p">Dispensaries:<br />
          {strain.dispensaries}</p><br />
        <Link className="Strain-back" to="/strains">BACK TO STRAINS</Link>
      </div>
    </div>
  )
}

export default Strain;