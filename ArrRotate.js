/*_____________________________Task:1__________________________________:

// Rotate Left only one element */

let arr = [1, 2, 3, 4, 5];
function arrRotate() {
  for (i = 0; i < arr.length; i++) {
    const [first, ...last] = arr;
    return [...last, first];
  }
}

console.log(arrRotate()); // output= [2,3,4,5,1]

/*_____________________________Task:2__________________________________:
A left rotation operation on a circular array shifts each of the array's elements 1 unit to the left. The elements that fall off the left end reappear at the right end. Given an integer d , rotate the array that many steps to the left and return the result. Sample Output: 5 1 2 3 4           */

console.log('Second Method output : ');

function rotateArr() {
  arr = [1, 2, 3, 4, 5];
  let n = arr.length;
  let d = 4;
  d %= n;

  // number of rotations
  for (let i = 0; i < d; i++) {
    let first = arr.shift(); // remove first element
    arr.push(first); // add it to end
  }

  return arr;
}
console.log(rotateArr()); 