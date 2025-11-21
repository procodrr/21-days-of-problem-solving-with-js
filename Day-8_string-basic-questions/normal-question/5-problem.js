// Check if Two Strings Are Anagrams (Without Sorting)
// Input: "listen", "silent"
// Output: Anagram ✨ Use character frequency comparison — no .sort().

function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;
  let frequency = {};
  for (let i = 0; i < str1.length; i++) {
    frequency[str1[i]] = (frequency[str1[i]] || 0) + 1;
  }
  for (let j = 0; j < str2.length; j++) {
    frequency[str2[j]] = frequency[str2[j]] - 1;
  }
  return Object.values(frequency).every((val) => val === 0);
}

console.log(areAnagrams("silentn", "listennn"));
