let myPromise = new Promise((resolve, reject) => {
  let x = false;
  if (x === true) {
    resolve("Successful promise!");
  } else {
    reject("Failed promise!");
  }
});

myPromise
  .then((resolveMessage) => {
    console.log("Resolved: " + resolveMessage);
  })
  .catch((rejectMessage) => {
    console.log("Rejected: " + rejectMessage);
  });
// => Rejected: Failed promise!

// - - - - - - - -

// Example: converting a callback into a promise

let someError = true;

const someFunc = (cb, errorCb) => {
  if (someError) {
    errorCb("Some error occured!");
  } else {
    cb("It worked!");
  }
};

someFunc(
  (successMesssage) => {
    console.log("Success: " + successMesssage);
  },
  (errorMessage) => {
    console.log("Error: " + errorMessage);
  }
);
// => Error: Some error occured!

someError = false;

someFunc(
  (successMesssage) => {
    console.log("Success: " + successMesssage);
  },
  (errorMessage) => {
    console.log("Error: " + errorMessage);
  }
);
// => Success: It worked

// Convert to a promise

const somePromise = () => {
  return new Promise((resolve, reject) => {
    if (someError) {
      resolve("Some error occured!");
    } else {
      reject("It worked!");
    }
  });
};

someError = true;

somePromise()
  .then((errorMessage) => {
    console.log("Promise error: " + errorMessage);
  })
  .catch((successMesssage) => {
    console.log("Promise success: " + successMesssage);
  });
// => Promise error: Some error occured!

someError = false;

somePromise()
  .then((errorMessage) => {
    console.log("Promise error: " + errorMessage);
  })
  .catch((successMesssage) => {
    console.log("Promise success: " + successMesssage);
  });
// => Promise success: It worked!
