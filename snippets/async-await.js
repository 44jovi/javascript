// 'async' always returns a promise even without 'await'
async function someFunc() {
  // empty function
}

someFunc().then(console.log("I am from someFunc."));
