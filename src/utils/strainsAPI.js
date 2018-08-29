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
      name: "Jack Herer",
      moods: "happy",
      categories: "sativa",
      dispensaries: ""
    },
    {
      id: 4,
      name: "Rock Bud",
      moods: "sleepy",
      categories: "indica",
      dispensaries: ""
    },
    {
      id: 5,
      name: "Blueberry Pie",
      moods: "hungry",
      categories: "hybrid",
      dispensaries: ""
    },
    {
      id: 6,
      name: "Purple Chemdawg",
      moods: "happy",
      categories: "indica",
      dispensaries: ""
    }
  ],
  all: function () { return this.strains },
  get: function (id) {
    const isStrain = d => d.id === id
    return this.strains.find(isStrain)
  }
}

export default StrainsAPI;