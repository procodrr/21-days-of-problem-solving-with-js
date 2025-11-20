// 4. Check if a Number Is a Powerful Number
// A number is powerful if every prime factor appears with an exponent ≥ 2.

// Input: N = 36
// Output: Powerful Number (36 → 2² × 3² → all exponents ≥ 2)

function isPowerfulNumber(num) {
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
  return keys.every((key) => primeFactors[key] >= 2);
}

console.log(isPowerfulNumber(35));