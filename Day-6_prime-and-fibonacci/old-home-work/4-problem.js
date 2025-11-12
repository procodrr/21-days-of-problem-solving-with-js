// Generate Fibonacci Numbers Within a Range

// Input: Start = 10, End = 100
// Output: 13, 21, 34, 55, 89
// ✨ Teaches conditional filtering and loop termination.

function fib(n) {
  if (n <= 0) return 0;
  if (n == 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

function fibWithinRange(start, end) {
  let fibs = [];
  let i = 0;
  let next = fib(0);
  while (next <= end) {
    if (next >= start) fibs.push(next);
    i++;
    next = fib(i);
  }
  return fibs;
}

console.log(fibWithinRange(10, 100));
