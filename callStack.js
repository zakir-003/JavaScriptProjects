// Call stack is the container where functions are kept to execute one by one on the bases of FILO
// example
function one() {
  two();
}
function two() {
  three();
}
function three() {
  console.log('hello');
}
one();

/* +++++++++ Flow inside the call stack ++++++++++

one() goes into the stack

two() goes on top

three() goes on top

"Hello" prints

three() is removed

two() is removed

one() is removed */
