// Find the Longest Word in a Sentence
// Input: "coding is beautiful"
// Output: "beautiful" ✨ Manual scanning + longest tracking.

function longestWord(stn) {
  let words = stn.split(" ");
  let longest = -Infinity;
  let longestWord = words[0];
  for (let i = 0; i < words.length; i++) {
    if (longest < words[i].length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

console.log(longestWord("coding is beautiful"));
