// 4. Check if a Number Is an Ugly Number
// Ugly numbers have only 2, 3, 5 as prime factors.

// Input: N = 18
// Output: Ugly (Because 18 → 2 × 3 × 3 → allowed)
// Input: N = 14
// Output: Not Ugly (Contains 7)

function isUglyNumber(num) {
  if (num <= 0) return false;
  if (num === 1) return true;

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
    factor += 2;
  }

  if(num > 2) primeFactors.push(num);
  return primeFactors.every((fact) => fact <= 5);
}

console.log(isUglyNumber(18))