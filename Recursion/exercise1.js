// Exercise 1 — Count Down
// Goal

// Write a recursive function that prints:

// 5
// 4
// 3
// 2
// 1

// when called with:

// countDown(5)

// No loops allowed.

function countDown(num) {
  if (num === 1) {
    console.log(1);
    return;
  }
  console.log(num);
  countDown(num - 1);
}
//countDown(5);
function test(num) {
  if (num === 1) {
    console.log("A");
    return;
  }

  console.log(num);
  test(num - 1);
  console.log("B" + num);
}

test(3);
