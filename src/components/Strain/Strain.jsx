import React from 'react';
import '../../views/App/App.css';

const Strain = (props) => {
  var strain = props.getStrainById(props.match.params.id);
  if (!strain) return null;
  return (
    <div>
      <div className="Strain-div">
        <h2 className="h2">{strain.name}</h2>
        <p className="Strain-p">Moods:<br />
          {strain.moods}</p>
        <p className="Strain-p">Categories:<br />
          {strain.categories}</p>
        <p className="Strain-p">Dispensaries:<br />
          {strain.dispensaries}</p>
      </div>
    </div>
  )
}

export default Strain;