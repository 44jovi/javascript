// 'async' always returns a promise even without 'await'
async function someFunc() {
  return 1234;
  // same as explicitly returning a promise:
  // return Promise.resolve(1234);
}

someFunc().then((response) => {
  console.log(response);
});

// => 1234
