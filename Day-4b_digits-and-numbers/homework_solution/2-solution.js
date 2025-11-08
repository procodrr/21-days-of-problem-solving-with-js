// Homework 2: Find the Average of Digits

// Input: N = 4567
// Output: Average = 5.5
// ✨ Combines digit sum and count for average computation.

const n = 4567;

function findAverage(n) {
  let digits = [];
  while (n !== 0) {
    let lastDigit = Math.floor(n % 10);
    digits.unshift(lastDigit);
    n = Math.floor(n / 10);
  }

  return digits.reduce((acc, curr) => acc + curr, 0)/digits.length;
}

console.log(findAverage(n));