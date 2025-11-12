// Check if the Sum of Two Consecutive Fibonacci Numbers is Prime

// Input: (5 + 8)
// Output: 13 is Prime

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

function isFibonacci(n) {
  return (
    Number.isInteger(Math.sqrt(5 * n ** 2 + 4)) ||
    Number.isInteger(5 * n ** 2 - 4)
  );
}

function isConsecutiveFibonacciPrime(a, b) {
  if (!isFibonacci(a) || !isFibonacci(b)) {
    return `${a} and ${b} are not Consecutive Fibonacci Numbers`;
  }

  if (a > b) {
    [a, b] = [b, a];
  }

  let f1 = 0,
    f2 = 1;

  while (f2 < b) {
    [f1, f2] = [f2, f1 + f2];
  }

  if (f1 === a && f2 === b) {
    const sum = a + b;
    return isPrime(sum) ? `${sum} is Prime` : `${sum} is not Prime`;
  } else {
    return `${a} and ${b} are not Consecutive Fibonacci Numbers`;
  }
}

console.log(isConsecutiveFibonacciPrime(8, 3));
