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

export default DispensaryAPI;

// const BASE_URL = '/api/dispensaries/';

// function addDispen(dispen) {
//   return fetch(BASE_URL, {
//     method: 'POST',
//     headers: new Headers({'Content-Type': 'application/json'}),
//     body: JSON.stringify(dispen)
//   })
//   .then(res => {
//     if (res.ok) return res.json();
//     throw new Error('Error.')
//   })
// }

// export default {
//   addDispen
// }