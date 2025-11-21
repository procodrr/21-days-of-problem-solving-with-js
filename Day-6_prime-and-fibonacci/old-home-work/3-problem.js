// Check if Two Numbers are Twin Primes

// Input: (3, 5)

// Output: Twin Primes

// ✨ Checks two conditions:

// Both numbers are prime
// Their difference = 2

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

function twinPrimes(a, b) {
    const greater = a > b ? a : b;
    const smaller = a < b ? a : b;
  return isPrime(a) && isPrime(b) && greater - smaller === 2;
}

console.log(twinPrimes(3, 5))