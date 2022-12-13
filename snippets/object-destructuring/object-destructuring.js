// --------------------
// Object destructuring
// --------------------

const bobby = {
  name: {
    firstName: "Bobby",
    lastName: "Bobson",
  },
  dates: {
    birthday: {
      year: 1944,
      month: 4,
      day: 4,
    },
  },
  stats: {
    height: {
      cm: 180,
      inches: 71,
    },
    weight: {
      kg: 80,
      pounds: 176,
    },
  },
  favourite: {
    colours: {
      first: "red",
      second: "green",
      third: "blue",
    },
    numbers: [1, 2, 3, 4],
  },
  currentMood: "Happy",
};

// Basic destructuring
const { name, currentMood } = bobby;
console.log(`${name.firstName} is currently ${currentMood}.`);

// Nested destructuring and variable renaming
const {
  favourite: {
    colours: { first, second: secondFavColour, third: potatoes },
    numbers,
  },
} = bobby;
console.log(first);
console.log(secondFavColour);
console.log(potatoes);
