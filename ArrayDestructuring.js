// Array destructuring JavaScript ka feature hai jo arrays se values ko direct variables me nikalne ke liye use hota hai. Ye feature ECMAScript 2015 me introduce hua tha.

let arr = ['Zakir', 1, 2, 3, 4];

//Case 1: Print elements
const [first, second, third] = arr; // Array destructuring aisy hota hai.
console.log(first, second, third);
//Case 2: Rest operator
const [a, b, c, ...rest] = arr; // The rest operator is used as optional if to print all remaining elemnts.
console.log(a, b, c, rest);

// case3: Default Value
let arr2 = [1, 2];
const [pehla, dusra, teesra = 30] = arr2; // yahan teesra default value rakha ha jo k arra ma nahi tha.
console.log(pehla, dusra, teesra);

//Case 4 Swap variables
let m = 20;
let n = 30;
console.log(`Before swap: m= ${m} and n= ${n}`);
[m, n] = [n, m]; // swapping of value by array destructuring.
console.log(`after swap m= ${m} and n= ${n}`);
