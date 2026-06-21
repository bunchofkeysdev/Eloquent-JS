// Exercise 2 — Recursive Summation

// We're now moving from:

// recursion that performs actions (printing)

// to:

// recursion that returns values

// This is where the "way back up" becomes extremely important.

// Goal

// Write a recursive function that computes:

// sum(4) = 4 + 3 + 2 + 1 = 10

// Examples:

// sum(1) // 1
// sum(2) // 3
// sum(3) // 6
// sum(4) // 10
// sum(5) // 15

// No loops allowed.

function sum(num) {
  if (num === 1) return 1;
  return num + sum(num - 1);
}
console.log(sum(4));
