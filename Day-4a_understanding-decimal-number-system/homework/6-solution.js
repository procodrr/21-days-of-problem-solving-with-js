// Homework 6: Find the Frequency of Each Digit

// Input: N = 112233
// Output: 1 → 2, 2 → 2, 3 → 2
// ✨ Combines loops and conditionals for counting repetitions.

const n = 112233;

function countFrequency(n) {
  const frequency = {};
  while (n !== 0) {
    let lastDigit = Math.floor(n % 10);
    if (!frequency[lastDigit]) {
      frequency[lastDigit] = 1;
    } else {
      frequency[lastDigit] = frequency[lastDigit] + 1;
    }
    n = Math.floor(n / 10);
  }

  return frequency;
}

console.log(countFrequency(n));