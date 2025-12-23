// Print All Fibonacci Numbers up to a Given Limit

// Input: Limit = 100
// Output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89

function fib(n) {
  if (n <= 0) return 0;
  if (n == 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

function fibUptoLimit(limit) {
  let fibs = [];
  let i = 0;
  let next = fib(0);
  while (next <= limit) {
    fibs.push(next);
    i++;
    next = fib(i);
  }
  return fibs;
}

console.log(fibUptoLimit(100));