// Dominant writing direction
// Write a function that computes the dominant writing direction in a string of text. Remember that each script object has a direction property that can be "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).

// The dominant direction is the direction of a majority of the characters that have a script associated with them. The characterScript and countBy functions defined earlier in the chapter are probably useful here.

function dominantDirection(text) {
  // Count characters matching each script's direction
  let counted = countBy(text, (char) => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  });

  // Filter out characters that do not belong to any script
  let validDirections = counted.filter((group) => group.name != "none");

  // If no script characters are found, default to left-to-right
  if (validDirections.length == 0) return "ltr";

  // Use reduce to find the group with the highest character count
  let dominantGroup = validDirections.reduce((max, current) => {
    return current.count > max.count ? current : max;
  });

  return dominantGroup.name;
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
