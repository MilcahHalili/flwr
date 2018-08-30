import React from 'react';
import DispensaryAPI from '../../utils/dispenAPI';
import '../../views/App/App.css';

const Dispensary = (props) => {
  const dispensary = DispensaryAPI.get(
    parseInt(props.match.params.id, 10)
  )
  if (!dispensary) {
    return <div>Sorry, but the dispensary was not found.</div>
  }
  return (
    <div className="Strain-div">
      <h2 className="h2">{dispensary.name}</h2>
      <p className="Strain-p">Address:<br />
      {dispensary.address}</p>
      <p className="Strain-p">Strains:<br />
      {dispensary.strains}</p>
    </div>
  )
}

// class Dispensary extends Component {
//   constructor() {
//     super()
//     this.state = {
//       dispensary: [
//         {
//           id: this.state.id,
//           name: this.state.name,
//           address: this.state.address
//         }
//       ]
//     }
//   }

//   render(props) {
//     var currentDispen = props.dispensaries[props.match.params.dispensary_id]
//     return (
//       <div>
//         <h2>{currentDispen.name}</h2>
//         <p>{currentDispen.address}</p>
//         <p>{currentDispen.strains}</p>
//       </div>
//     )
//   }
// }

export default Dispensary;