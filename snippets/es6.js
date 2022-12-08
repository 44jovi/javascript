// Arrow functions

// ------
// Syntax
// ------

// Example 1 - multiple parameters
function sum1(a, b) {
  return a + b
}

const sum2 = (a, b) => {
  return a + b
}

const sum3 = (a, b) => a + b

// Example 2 - single parameter
function isOdd1(n) {
  return n % 2 != 0
}

const isOdd2 = n => n % 2 != 0

// Example 3 - zero parameters

function sayHowdy1() {
  return "Howdy!"
}

const sayHowdy2 = () => "Howdy!"

// Example 4 - anonymous functions

setTimeout(function() {
  console.log("I'm delayed by 1 second!")
}, 1000)

setTimeout(() => console.log("I'm delayed by 2 seconds!"), 2000)

// -----
// Scope
// -----

class Colour {
  constructor(name) {
    this.name = name
  }

  getName() {
    setTimeout(function() {
      console.log(this.name)
    }, 1000)
  }

  getNameArrowFunc() {
    setTimeout(() => {
      console.log(this.name)
    }, 1000)
  }
}

const purple = new Colour("Purple")
// Global scope 'this'
purple.getName()
// => undefined

// Class scope 'this'
purple.getNameArrowFunc()
// => Purple
