// Check if a Number is a Perfect Number

// Input: N = 28
// Output: Perfect Number
// If sum of all proper divisors = number → Perfect Number.

function isPerfectNumber(n) {
  const factors = [];
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      factors.push(i);
    }
  }
  return n === [...factors].reduce((acc, curr) => acc + curr, 0);
}

console.log(isPerfectNumber(28))