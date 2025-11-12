// Print First N Prime Fibonacci Numbers

// Input: N = 5
// Output: 2, 3, 5, 13, 89
// ✨ Challenges students to merge both concepts — Fibonacci generation + primality test.

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

function primeFibUptoN(n) {
  let fibs = [];
  let a = 0,
    b = 1;

  while (fibs.length < n) {
    let next = a + b;
    a = b;
    b = next;

    if (isPrime(next)) fibs.push(next);
  }
  return fibs;
}
console.log(primeFibUptoN(5));
