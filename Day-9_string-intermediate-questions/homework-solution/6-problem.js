//  Find the Longest Substring Without Repeating Characters (Sliding Window)
// Input: "abcabcbb"
// Output: "abc" ✨ Introduction to sliding windows, hash maps, and window shrinking logic.

function longestSubstringWithoutRepatedChar(str) {
  let longestSubstr = null;
  let longestLength = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      let substr = str.slice(i, j + 1);
      if (substr.length > longestLength && [...new Set(substr)].join("") === substr) {
        longestSubstr = substr;
        longestLength = substr.length;
      }
    }
  }

  return longestSubstr;
}

console.log(longestSubstringWithoutRepatedChar("abcabcbb"));