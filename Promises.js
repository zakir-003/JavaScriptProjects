let promise = new Promise((res, rej) => {
  console.log('This is Promise');
  let num = 41;
  if (num % 2 == 0) res('The number is even');
  else rej('the number is odd!');

  res(123);
  rej('Data not found!');
});
promise.then((res) => console.log(res));
promise.catch((rej) => console.log(rej));
