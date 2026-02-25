//Async/Await is a way to write asynchronous code that looks like normal synchronous code.
/*
👉 async
Makes a function return a Promise automatically.
👉await
Pauses the function until the Promise is finished. */

//Example of API Promise
async function GetData(params) {
  console.log('Fetching Data...');

  let data = await fetch('https://jsonplaceholder.typicode.com/posts'); // this in an API.
  console.log(await data.json());
}
GetData();

/////-----------------------------------------------/////////
// Example 2: Khud ka banaya Promise

function getUser(userid, name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('getUser function run');
      resolve(`User name: ${name} (ID: ${userid})`);
    }, 2000); // time kam kiya testing ke liye
  });
}

function getOrders() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('GetOrder function run');
      resolve('You ordered T-shirt');
    }, 2000);
  });
}

function getOrderDetails() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Order Details function run');
      resolve({
        nameItem: 'T-Shirt',
        MD: '20/20/25',
        color: 'red',
        price: 500,
      });
    }, 2000);
  });
}

// async await for the above functions.
async function fetchUserOrderDetails() {
  try {
    console.log('Fetching User Details .......');
    const user = await getUser(123, 'Zakir');
    console.log(user);

    console.log('Fetching Order ........');
    const order = await getOrders();
    console.log(order);

    console.log('Fetching Order Details .......');
    const details = await getOrderDetails();
    console.log('Final result:', details);

    // yahan aur bhi kaam kar sakte ho (jaise save karna, UI update etc)
  } catch (err) {
    console.log('Kuch toot gaya:', err);
  }
}


fetchUserOrderDetails();
