// Homework 1:  Find the Sum of Digits

// Input: N = 987
// Output: 24
// ✨ Builds understanding of digit extraction and accumulation.

const n = 987;

function sumOfDigits(n) {
  let sum = 0;
  while (n !== 0) {
    let lastDigit = Math.floor(n % 10);
    sum += lastDigit
    n = Math.floor(n / 10);
  }
  return sum;
}

console.log(sumOfDigits(n));
