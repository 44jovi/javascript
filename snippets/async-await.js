// 'async' always returns a promise even without 'await'
async function someFunc1() {
  return 1234;
  // same as explicitly returning a promise:
  // return Promise.resolve(1234);
}

someFunc1().then((response) => {
  console.log(response);
});

// => 1234

// 'await' waits (suspends the function) until a promise is fulfilled before it returns its result

async function someFunc2() {
  let promise = new Promise((resolve) => {
    setTimeout(() => resolve("Promise resolved after waiting 1000ms!"), 1000);
  });

  let response = await promise;

  console.log(response);
}

someFunc2();

// Example of using await on a class with a 'then' method

class AddOne {
  constructor(number) {
    this.number = number;
  }
  then(resolve, reject) {
    // resolve(this.number + 1);
    setTimeout(() => resolve(this.number + 1), 2000);
  }
}

async function UseAddOne() {
  let result = await new AddOne(10);
  console.log(result + " is the result, after waiting 2000ms!");
}

UseAddOne();

// Example of an async method in a class

class HelloThere {
  async say() {
    return await Promise.resolve("Hello there.");
  }
}

const helloThere = new HelloThere();

helloThere.say().then((result) => console.log(result));
