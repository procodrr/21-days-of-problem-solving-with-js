// Find the First Non-Repeating Character
// Input: "aabbcddeff"
// Output: c ✨ Requires 2-pass algorithm: first count → then find first unique.

function nonRepeatingChar(str) {
  let frequency = {};
  for (let i = 0; i < str.length; i++) {
    frequency[str[i]] = (frequency[str[i]] || 0) + 1;
  }

  let nonRepeatingChar = Object.entries(frequency).find(([key, value]) => value === 1);

  return nonRepeatingChar?.[0] || null;
}

console.log(nonRepeatingChar("suucccceessaa"))