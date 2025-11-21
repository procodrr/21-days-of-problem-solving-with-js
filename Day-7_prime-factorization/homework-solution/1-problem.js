//  Find the Product of All Distinct Prime Factors
// Input: N = 150
// Output: Product = 2 × 3 × 5 = 30

function DistinctPrimeFactorProduct(num) {
  let primeFactors = {};

  while (num % 2 === 0) {
    primeFactors[2] = (primeFactors[2] || 0) + 1;
    num = num / 2;
  }
  let factor = 3;
  while (factor <= Math.sqrt(num)) {
    while (num % factor === 0) {
      primeFactors[factor] = (primeFactors[factor] || 0) + 1;
      num = num / factor;
    }
    factor+=2;
  }

  if(num > 2) primeFactors[num] = (primeFactors[num] || 0) + 1;

  const keys = Object.keys(primeFactors);
  return keys.reduce((acc, curr) => acc*curr ,1);
}

console.log(DistinctPrimeFactorProduct(150))