// What is call back?
// A function that is passed as an argument to another function and is executed later.
// * Used in:  Asynchronous operations, setTimeout, API calls, File reading
// Example 1:
function getInfo(name, callback) {
  console.log('hi I am  ', name);
  callback(); //yahan sa callback fucntion invoke hoga jo k nichy diya hua ha run hoga which is IamCallback().
}
function IamCallback() {
  console.log('I am CallBack Function!');
}

getInfo('Zair Ansari', IamCallback); // yahan sa zakir ansari name k ander chala jae ga and IamCallback ja kr getInfo k ander 'Callback' parameter ma jae ga.

//Example 2: Calculator using callback fucntion
let calculator = (a, b, operation) => {
  return operation(a, b);
};
// callback fuctions
let Add = (a, b) => a + b; // addtion wala callback
let Sub = (a, b) => a - b; // subtraction wala callback
// Calling of HOF whihc is calculator with arguments of two values and a callback function i.e. Add .
let result = calculator(6, 7, Add);
console.log(`The reslult is of sum is = ${result}`);
result = calculator(6, 7, Sub);
console.log(`The reslult is of Subtaction is = ${result}`);

// this is all about callback
