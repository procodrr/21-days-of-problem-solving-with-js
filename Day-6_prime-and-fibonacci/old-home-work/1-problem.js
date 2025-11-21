// Count the Number of Prime Numbers up to N

// Input: N = 50
// Output: 15 Prime Numbers
// ✨ Combines iteration, condition checks, and counter variable.

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

function countPrimeNumberUptoN(n) {
    if(n < 2) return [];
    let primeNums = [];
    for (let i = 2; i <= n; i++) {
        if(isPrime(i)){
            primeNums.push(i);
        }
    }
    return primeNums.length;
}

console.log(countPrimeNumberUptoN(50))
