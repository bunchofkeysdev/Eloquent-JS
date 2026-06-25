function findMax(arr) {
  if (arr.length === 1) return arr[0];
  const maxOfRest = findMax(arr.slice(1));
  return arr[0] > maxOfRest ? arr[0] : maxOfRest;
}

console.log(findMax([8, 3, 12, 5]));
