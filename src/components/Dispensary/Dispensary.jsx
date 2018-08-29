import React from 'react';

const DispensaryAPI = {
  dispensaries: [
    {
      id: 1,
      name: "California Caregivers Alliance",
      address: "Los Angeles",
      strains: "Wedding Cake"
    },
    {
      id: 2,
      name: "Cornerstone Research Collective",
      address: "Los Angeles",
      strains: ""
    },
    {
      id: 3,
      name: "Harborside",
      address: "Oakland",
      strains: ""
    },
    {
      id: 4,
      name: "Magnolia Oakland",
      address: "Oakland",
      strains: ""
    },
    {
      id: 5,
      name: "Sparc",
      address: "San Francisco",
      strains: ""
    },
    {
      id: 6,
      name: "Barbary Coast",
      address: "San Francisco",
      strains: ""
    }
  ],
  all: function () { return this.dispensaries },
  get: function (id) {
    const isDispen = d => d.id === id
    return this.dispensaries.find(isDispen)
  }
}

const Dispensary = (props) => {
  const dispensary = DispensaryAPI.get(
    parseInt(props.match.params.id, 10)
  )
  if (!dispensary) {
    return <div>Sorry, but the dispensary was not found.</div>
  }
  return (
    <div>
      <h2>{dispensary.name}</h2>
      <h3>Address:<br />
      {dispensary.address}</h3>
      <p>Strains:<br />
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
//         <p>{currentDispen.description}</p>
//         <p>{currentDispen.price}</p>
//       </div>
//     )
//   }
// }

export default Dispensary;