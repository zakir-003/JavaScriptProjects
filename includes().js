// includes() JavaScript ka method hai jo check karta hai koi value array ya string ke andar maujood hai ya nahi or true ya false return ktra ha.

// 1️⃣ Array me includes()
let arr = [1, 'Zakir', 3, 4, 5];
console.log(arr.includes('Zakir'));
console.log(arr.includes(50));

// 2️⃣ String me includes()
let info = 'Zakir';
console.log('String ma: ', info.includes('zakir')); // false de ga q k case sensitive ha

// 3: Starting Position se Search
let arr1 = [2, 7, 4, 5, 3];
console.log('Kiya index no 2 sa agay 3 mojud ha? ', arr1.includes(3, 2)); // arr.1.icludes(3,2) ka matlb 3 value jo search krna ha, 2 index no jahan sa search krna ha

//++++++++Common Development Use Cases+++++++
//1️⃣ Permission Check

let roles = ['Admin', 'CEO', 'user'];
if (roles.includes('Admin')) {
  console.log('Permission Granted');
} else console.log('Permission Not granted!');

//2️⃣ Duplicate Check
let Usersinfo = ['Zakir', '71103'];
const newUser = 'Zakirrrrr';
if (Usersinfo.includes(newUser)) {
  console.log('User Already Exists!!!!');
} else console.log(`New user inserted as: ${newUser}`);
