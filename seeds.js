require('dotenv').config();
require('./config/database');
var Strain = require('./models/strain');

Strain.deleteMany({})
.then(() => {
  Strain.create(
    [
      {
        name: "Wedding Cake",
        moods:
          ["relaxed, ",
           "happy"
          ],
        categories: ["hybrid"],
      },
      {
        name: "Blue Hawaiian",
        moods: ["creative"],
        categories: ["sativa"],
      },
      {
        name: "Jack Herer",
        moods: ["happy"],
        categories: ["sativa"],
      },
      {
        name: "Rock Bud",
        moods: ["sleepy"],
        categories: ["indica"],
      },
      {
        name: "Blueberry Pie",
        moods: ["hungry"],
        categories: ["hybrid"],
      },
      {
        name: "Purple Chemdawg",
        moods: ["happy"],
        categories: ["indica"],
      }
    ]
  ).then(() => {
    process.exit();
  });
});