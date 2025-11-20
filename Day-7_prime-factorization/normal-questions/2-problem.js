// Factorization in Exponent Form
// Input: N = 360
// Output: "2^3 × 3^2 × 5^1"

function primeFactorizationInExponentForm(num) {
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
  let output = "";
  keys.forEach((key, idx) => {
    output += `${key}^${primeFactors[key]}${(idx === keys.length - 1) ? "" : " X "}`;
  });
  return output;
}

console.log(primeFactorizationInExponentForm(360));