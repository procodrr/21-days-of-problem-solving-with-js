// Check if a Number Is a Square-Free Number
// A number is square-free if none of its prime factors repeat.

// Input: N = 30
// Output: Square-Free Number (2 × 3 × 5 → no repeats)

function isSquareFreeNumber(num) {
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
  return keys.every((key) => primeFactors[key] == 1);
}

console.log(isSquareFreeNumber(30))