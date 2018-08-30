import React from 'react';
import StrainAPI from '../../utils/strainsAPI';
import '../../views/App/App.css';

const Strain = (props) => {
  const strain = StrainAPI.get(
    parseInt(props.match.params.id, 10)
  )
  if (!strain) {
    return <div className="Strain-div"><h2 className="h2"><span role="img" aria-label="brown man shrugging">💁🏽‍♂️</span> Hm, this strain is missing.</h2></div>
  }
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