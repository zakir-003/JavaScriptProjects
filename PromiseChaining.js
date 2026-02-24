// Using .then() multiple times in sequence is called Promise chaining, so async tasks run one after another in order.

function getUser(userid, name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('getUser function run');
      resolve(`${userid}, ${name}`);
    }, 4000);
  });
}
function getOrders() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('GetOrder function run');
      resolve('You ordered T-shirt');
    }, 4000);
  });
}

function getOrderDetails() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Order Details function run');
      resolve({
        nameItem: 'T-Shirt',
        MD: 20 / 20 / 25,
        color: 'red',
        price: 500,
      });
    }, 4000);
  });
}

// Promise Chaining below...!

// console.log('Fetching User Details .......');
// let p1 = getUser();
// p1.then((res) => {
//   console.log(res);

//   console.log('Fetching Order ........');

//   let p2 = getOrders();
//   p2.then((res) => {
//     console.log(res);

//     console.log('Fetching Order Details .......');
//     let p3 = getOrderDetails();
//     p3.then((res) => {
//       console.log(res);
//     });
//   });
// });

console.log('Fetching User Details .......');

getUser(123, 'Zakir') // ← arguments pass
  .then((user) => {
    console.log(user);

    console.log('Fetching Order ........');
    return getOrders(); // important: return karo
  })
  .then((order) => {
    console.log(order);

    console.log('Fetching Order Details .......');
    return getOrderDetails(); // yahan bhi return
  })
  .then((details) => {
    console.log('Final result:', details);
  })
  .catch((err) => {
    console.log('Kuch toot gaya:', err);
  });
