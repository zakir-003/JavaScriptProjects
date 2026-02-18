setTimeout(() => {
  for (let i = 0; i < 1e6; i++) {}
  console.log('Now this code is executed by Unblocking other tasks');
}, 2000); // this will run behind for 5 seconds but rest of the other task will run

console.log('This line is run without blockage of the heavy loop');
// In this way the console content at the last will run asynchrnously first then after that the heavy loop function is executed.