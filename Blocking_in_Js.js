// This is the most important practical concept.
// Blocking means One task stops every other tasks until it finishes.
//example
for (let i = 0; i < 1e5; i++) {
  console.log(i);
}
console.log('This line runs after a long delay due to a long loop');
