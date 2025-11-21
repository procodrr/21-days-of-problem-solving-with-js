// Print Fibonacci Series up to N Terms

// Input: N = 10
// Output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

function fib(n) {
  if (n <= 0) return 0;
  if (n == 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

function fibUptoN(n) {
  let fibs = [];
  for (let i = 0; i < n; i++) {
    fibs.push(fib(i));
  }
  return fibs;
}

console.log(fibUptoN(10));