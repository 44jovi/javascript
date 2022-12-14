// --------------------------
// Object destructuring (ES6)
// --------------------------

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
  },
} = bobby;
console.log(first);
// => "red"
console.log(secondFavColour);
// => "green"
console.log(potatoes);
// => "blue"

// Nested arrays destructuring
const {
  favourite: {
    numbers: [element1, element2, element3, element4],
  },
} = bobby;
console.log(element1);
// => 1
console.log(element3);
// => 3
