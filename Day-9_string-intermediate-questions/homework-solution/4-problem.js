//  Find the Longest Palindromic Substring (Brute Force Allowed)
// Input: "babad"
// Output: "bab" or "aba" ✨ Check all substrings; teaches brute-force reasoning.

function longestPalindromeSubstring(str) {
  let longestSubstr = null;
  let longestLength = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      let substr = str.slice(i, j + 1);
      if (
        substr == substr.split("").reverse().join("") &&
        substr.length > longestLength
      ) {
        longestSubstr = substr;
        longestLength = substr.length;
      }
    }
  }

  return longestSubstr;
}

console.log(longestPalindromeSubstring("babad"));
