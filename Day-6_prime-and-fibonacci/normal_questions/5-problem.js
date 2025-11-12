// Check if a Number Belongs to the Fibonacci Series

// Input: 21
// Output: Yes

function isFibonacci(n) {
  return (
    Number.isInteger(Math.sqrt(5 * n ** 2 + 4)) ||
    Number.isInteger(Math.sqrt(5 * n ** 2 - 4))
  );
}

console.log(isFibonacci(21));
