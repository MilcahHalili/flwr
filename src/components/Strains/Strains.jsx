import React from 'react';
import { Link } from 'react-router-dom';
import strainsAPI from '../../utils/strainsAPI';
import '../../views/App/App.css';

const Strains = (props) => {
  var strains = props.strains.map(s => (
    <li key={s.id}>
      <Link to={`/strain/${s._id}`}>
        <p className="herb"><span role="img" aria-label="herb">🌿</span></p>
        {s.name}
      </Link>
    </li>
  ));
  return (
    <div>
      <div className="Index-div">
        <ul className="Index-ul">
          {strains}
        </ul>
      </div>
    </div>
  );
};

// class Strains extends Component {
//   constructor() {
//     super();
//     this.state = {
//       data: []
//     }
//   }

//   render() {
//     var strains;
//     strainsAPI.all()
//     .then(strains => {
//       strains = strains.map(function(strain) {
//       return (
//         <li key={strain.id}>
//            <Link to={`/strain/${strain.id}`}>
//            <p className="herb"><span role="img" aria-label="herb">🌿</span></p>
//           {strain.name}
//         </Link>
//         </li>
//       )
//     })
//   })
//     return(
//       <div>
//         <h1>all strains</h1>
//         <Link to="/addStrain">add new strain</Link>
//         <br/>
//         <ul>
//           {strains}
//         </ul>
//        </div> 
//     )
//   }
// }

export default Strains;