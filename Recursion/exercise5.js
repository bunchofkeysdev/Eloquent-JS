// Exercise 5 — Count the Characters in a String

// We're still doing return values, but now with strings.

// Goal

// Write a recursive function that returns:
function countChars(str) {
  if (str.length === 0) return 0;

  return 1 + countChars(str.slice(1));
}
console.log(countChars("hello")); // 5
console.log(countChars("a")); // 1
console.log(countChars("")); // 0

// No loops.
