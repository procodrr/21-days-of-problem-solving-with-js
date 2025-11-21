//  Remove All Duplicate Characters (Keep First Occurrence)
// Input: "programming"
// Output: "progamin" ✨ Use a visited set + build new string.

function removeDuplicates(str) {
  let unique = new Set();

  for (let i = 0; i < str.length; i++) {
    if (unique.has(str[i])) {
      continue;
    } else {
      unique.add(str[i]);
    }
  }

  return [...unique].join("");
}

console.log(removeDuplicates("programming"))
