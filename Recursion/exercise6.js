//Exercise 6 — Count Occurrences
function countA(str) {
  if (str.length === 0) return 0;

  return (str[0] === "a" ? 1 : 0) + countA(str.slice(1));
}
//Goal:

console.log(countA("banana")); // 3
console.log(countA("apple")); // 1
console.log(countA("")); // 0
