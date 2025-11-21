// Manual Substring Search (Without Using indexOf)
// Input: text = "hello world", pattern = "wor"
// Output: Found at index 6 ✨ Classic naive pattern matching algorithm (two nested loops).

function startIndexOfSubstring(main, target) {
  for (let i = 0; i < main.length; i++) {
    for (let j = i; j < main.length; j++) {
      if (main.slice(i, j + 1) == target) {
        return i;
      }
    }
  }
  return -1;
}

console.log(startIndexOfSubstring("hello world", "wor"))