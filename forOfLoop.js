// Looping over values of arrays, strings, Maps, Sets, etc. Most recommended for arrays nowadays
//UseCase 1: find the total of income using for of loop.
let income = [20000, 30000, 45000, 12000];
let total = 0;
for (let incomes of income) {
  total += incomes;
}
console.log('Incomes: ', income);
console.log('Total sum of incomes: ', total);

// Usecase 2: Square of numbers in the array
let numbers = [1, 2, 3, 4, 5];
for (let num of numbers) {
  console.log('Squares of numbers: ', num * num);
}
// Usecase 3: String ke har character ko loop karna.
let name = 'Zakir';
for (const char of name) {
  console.log(char);
}
