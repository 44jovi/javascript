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

// 'await' waits until a promise is fulfilled before it returns its result

async function someFunc2() {
  let promise = new Promise((resolve) => {
    setTimeout(() => resolve("Promise resolved after waiting 1000ms!"), 1000);
  });

  let resposne = await promise;

  console.log(resposne);
}

someFunc2();
