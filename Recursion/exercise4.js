// Exercise 4 — Sum an Array

// Now we're moving away from numbers and into data structures.

// Goal

// Write a recursive function that returns:
function sumArray(arr) {
  if (arr.length === 0) return 0;

  return arr[0] + sumArray(arr.slice(1));
}
console.log(sumArray([2, 4, 6])); // 12
console.log(sumArray([5])); // 5
console.log(sumArray([])); // 0

//No loops.
