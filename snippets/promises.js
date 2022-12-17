let somePromise = new Promise((resolve, reject) => {
  let x = false;
  if (x === true) {
    resolve("Successful promise!");
  } else {
    reject("Failed promise!");
  }
});

somePromise
  .then((resolveMessage) => {
    console.log("Resolved: " + resolveMessage);
  })
  .catch((rejectMessage) => {
    console.log("Rejected: " + rejectMessage);
  });
