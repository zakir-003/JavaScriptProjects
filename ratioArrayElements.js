/*. Hecker Rank Question: arr = [-4, 3, -9, 0, 4, 1] There are 3 positive numbers, 2 negative numbers, and 1 zero in the array. Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with digits after the decimal. The function should not return a value. 
Expected output= 
0.500000
0.333333
0.166667
*/

function plusMinus(arr) {
  // Write your code here
  arr = [-4, 3, -9, 0, 4, 1];
  let size = arr.length;
  let positive = 0;
  let negative = 0;
  let nulll = 0;
  arr.forEach(function (element) {
    if (element > 0) {
      positive++;
    } else if (element < 0) {
      negative++;
    } else nulll++;
  });
  console.log((positive / size).toFixed(6));
  console.log((negative / size).toFixed(6));
  console.log((nulll / size).toFixed(6));
}
plusMinus();
