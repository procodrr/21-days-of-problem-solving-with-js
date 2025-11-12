// Check if the Sum of Two Consecutive Fibonacci Numbers is Prime

// Input: (5 + 8)
// Output: 13 is Prime
// ✨ Combines Fibonacci logic and prime checking into one problem.

function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true; // prime number
  if (n % 2 === 0) return false; // Even numbers other than 2 are not prime;

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function isConsecutiveFibonacciPrime(a, b) {
  let n = b - a;
  let isConsecutive =
    Number.isInteger(Math.sqrt(5 * n ** 2 + 4)) ||
    Number.isInteger(5 * n ** 2 - 4);

  if (!isConsecutive) {
    return `${a} and ${b} are not Consecutive Fibonacci Numbers`;
  }

  return isPrime(a + b) ? `${a + b} is Prime` : `${a + b} is not Prime`;
}

console.log(isConsecutiveFibonacciPrime(13, 21));
