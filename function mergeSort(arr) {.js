function mergeSort(arr) {
  if (arr.length <= 1) return arr; // if only single value
  console.log('ar=', arr);

  const mid = Math.floor(arr.length / 2); // mid find

  const left = mergeSort(arr.slice(0, mid)); // slice ki waja sa 0 sa mid tak k values alag ho jean ge
  const right = mergeSort(arr.slice(mid)); // mid sa agay k values alag ho jaen ge.

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  //console.log('reslut= ', result.concat(left.slice(i)).concat(right.slice(j)));
  return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([5, 3, 8, 4, 2]));
