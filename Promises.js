// ++++++Another example of promise in conditional statemtnet +++++++++++
let promise = new Promise((resolve, rej) => {
  console.log('This is Promise');
  let num = 4;
  if (num % 2 == 0) resolve('The number is even');
  else rej('the number is odd!');

  resolve(123);
  rej('Data not found!');
});
promise.then((res) => console.log(res)); //   .then k zariye resolve chalta hai
promise.catch((rej) => console.log(rej)); //  .catch sa reject part ko chalate hain

// Create a promise that resovle after 2 seconds
function AsyncFunc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('success');
    }, 2000);
  });
}
let p1 = AsyncFunc();
p1.then((res) => console.log(res)); // res k ander resolve wala value aye ga uper sa.
