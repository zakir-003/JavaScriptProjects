// +++++++++++Call Back hell+++++
// Example:
//Create async function using callback:Get User → Get Orders → Get Order Details

function getUser(userId, callback) {
  setTimeout(() => {
    console.log('User fetched');
    callback({ id: userId, name: 'Zakir' });
  }, 1000);
}

function getOrders(userId, callback) {
  setTimeout(() => {
    console.log('Orders fetched');
    callback([{ orderId: 101 }]);
  }, 1000);
}

function getOrderDetails(orderId, callback) {
  setTimeout(() => {
    console.log('Order details fetched');
    callback({ orderId: orderId, product: 'Laptop' });
  }, 1000);
}

getUser(1, function (user) {
  getOrders(user.id, function (orders) {
    getOrderDetails(orders[0].orderId, function (details) {
      console.log('Final:', details);
    });
  });
});
