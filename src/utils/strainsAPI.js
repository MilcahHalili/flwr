const StrainsAPI = {
  strains: [
    {
      id: 1,
      name: "Wedding Cake",
      moods: "relaxed",
      categories: "hybrid",
      dispensaries: "California Caregivers Alliance"
    },
    {
      id: 2,
      name: "Blue Hawaiian",
      moods: "creative",
      categories: "sativa",
      dispensaries: "Cornerstone Research Collective"
    },
    {
      id: 3,
      name: "Harborside",
      moods: "Oakland",
      categories: "",
      dispensaries: ""
    },
    {
      id: 4,
      name: "Magnolia Oakland",
      moods: "Oakland",
      categories: "",
      dispensaries: ""
    },
    {
      id: 5,
      name: "Sparc",
      moods: "San Francisco",
      categories: "",
      dispensaries: ""
    },
    {
      id: 6,
      name: "Barbary Coast",
      moods: "San Francisco",
      categories: "",
      dispensaries: ""
    }
  ],
  all: function () { return this.dispensaries },
  get: function (id) {
    const isDispen = d => d.id === id
    return this.dispensaries.find(isDispen)
  }
}

export default StrainsAPI;