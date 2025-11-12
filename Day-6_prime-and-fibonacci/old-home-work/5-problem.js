// Find the Sum of Even Fibonacci Numbers up to N Terms

// Input: N = 10
// Output: Sum = 44 (2 + 8 + 34)
// ✨ Introduces conditional summation inside Fibonacci generation.

function fib(n) {
  if (n <= 0) return 0;
  if (n == 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

function fibUptoN(n) {
  let fibs = [];
  for (let i = 0; i < n; i++) {
    let curr = fib(i);
    if (curr % 2 === 0) {
      fibs.push(curr);
    }
  }
  return fibs.reduce((acc, curr) => acc + curr, 0);
}

console.log(fibUptoN(10));
