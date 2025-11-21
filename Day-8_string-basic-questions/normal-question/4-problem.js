// Find the Most Frequent Character in a String
// Input: "success"
// Output: Most frequent: s (3 times) ✨ Builds on frequency map — find maximum occurrence.

function mostFrequentChar(str) {
  let frequency = {};
  for (let i = 0; i < str.length; i++) {
    frequency[str[i]] = (frequency[str[i]] || 0) + 1;
  }
  let max = -Infinity;
  let maxKey = null; 
  Object.entries(frequency).forEach(([key, value]) => {
    if(value > max) {
        max = value;
        maxKey = key;
    }
  });
  return maxKey;
}

console.log(mostFrequentChar("succccess"))