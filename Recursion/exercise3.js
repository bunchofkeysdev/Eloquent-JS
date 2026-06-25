// Exercise 3 — Factorial

// This is the classic recursion problem.

// Goal

// Write a recursive function that computes:

// factorial(4)

// = 4 × 3 × 2 × 1

// = 24

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
// Examples:

console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120

//No loops.
