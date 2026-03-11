//Object Destructuring JavaScript ka ek feature hai jo objects se values easily nikalne (extract karne) ke liye use hota hai. Ye feature ECMAScript 2015 me introduce hua tha.

// Without Destructuring...!
console.log('Wthout Destructuring output');
const personalInfo = {
  firstname: 'Zakir',
  lastname: 'Ansari',
  City: 'Skardu',
};

let Name = personalInfo.firstname; // without destructuring ma dot(.) laga laga k extract krna hota ha
let Residence = personalInfo.City;
console.log(Name);
console.log(Residence);

// With Destructuring...!
//Case 1: Direct object sa value nikalna
console.log('Wth Destructuring output');

const { firstname, lastname } = personalInfo; // This is actually destructuring the objects.
console.log(`First Name: ${firstname} Last Name: ${lastname}`);

// Case 2: You can also use shorthand by renaming variables/properties of the object.

const { firstname: fn, lastname: ln } = personalInfo; // yahan firstname orr lastname lamba hota ha iss liye fn or ln sa shorthand kr dya or print kr dya

console.log(`shorthand method ka output ${fn} ${ln}`);

//Case 3: Default Values
//Agar property object me na ho to default value de sakte hain by destructuring.

let person2 = {
  name: 'Abdul',
};
const { name, age = 25 } = person2;
console.log('Defalut value jo k age ha : ', name, age);

//Case 4: Nested Object Destructuring...!
let person = {
  Name: 'Sajid',
  Address: {
    city: 'Skardu',
    district: 'Ghanche',
    country: 'Pakistan',
  },
};
const {
  Address: { city, country },
} = person;
console.log(`Address:  ${city} ${country}`);

// Case 5: Function Parameters me Destructuring (Very Common)
let user = {
  username: 'Manchopa',
  age: '30',
};
function printUser({ username, age }) {
  console.log(
    'This is the output of function parameter desturucting',
    username,
    age
  );
}
printUser(user);
