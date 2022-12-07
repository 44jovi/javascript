// .filter()
// Array.prototype.filter()

const word = "abba";
const letters = ["a", "b", "c"];

// Return true if word includes given letter
console.log(word.includes("a"));
console.log(word.includes("b"));
// => true
// => true
console.log(word.includes("c"));
// => false

// Return elements (letters) that meet the condition
var result = letters.filter((letter) => word.includes(letter));
console.log(result);
// => [ 'a', 'b' ]

// Return elements (letters) that do not meet the condition
var result = letters.filter((letter) => !word.includes(letter));
console.log(result);
// => [ 'c' ]
