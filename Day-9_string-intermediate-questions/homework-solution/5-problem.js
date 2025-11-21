//  Find All Anagram Pairs in an Array of Strings
// Input: ["cat", "tac", "act", "dog"]
// Output: ["cat","tac","act"]


function findAllAnagramGroups(arr) {
  const map = new Map();

  for (const word of arr) {
    const sorted = word.split("").sort().join("");
    if (!map.has(sorted)) {
      map.set(sorted, []);
    }
    map.get(sorted).push(word);
  }

  return Array.from(map.values()).filter(group => group.length > 1);
}

console.log(findAllAnagramGroups(["cat", "tac", "act", "dog"]));