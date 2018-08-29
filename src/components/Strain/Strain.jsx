import React from 'react';
import StrainAPI from '../../utils/strainsAPI';

const Strain = (props) => {
  const strain = StrainAPI.get(
    parseInt(props.match.params.id, 10)
  )
  if (!strain) {
    return <div>Sorry, but the strain was not found.</div>
  }
  return (
    <div>
      <h2>{strain.name}</h2>
      <p>Moods:<br />
      {strain.moods}</p>
      <p>Categories:<br />
      {strain.categories}</p>
      <p>Dispensaries:<br />
      {strain.dispensaries}</p>
    </div>
  )
}

export default Strain;