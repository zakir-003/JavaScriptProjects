function Arr(arr) {
  console.log('I am resursive', arr);
  if (arr.length === 0) return arr;
  Arr(arr.slice(1));
}
console.log(Arr([1, 2, 3, 4, 5]));
