// Find the Prime Factorization (Return as an Array)
// Input: N = 84
// Output: [2, 2, 3, 7]

function primeFactorization(num) {
  let primeFactors = [];

  while (num % 2 === 0) {
    primeFactors.push(2);
    num = num / 2;
  }
  let factor = 3;
  while (factor <= Math.sqrt(num)) {
    while (num % factor === 0) {
      primeFactors.push(factor);
      num = num / factor;
    }
    factor+=2;
  }

  if(num > 2) primeFactors.push(num);
  return primeFactors;
}

console.log(primeFactorization(84));