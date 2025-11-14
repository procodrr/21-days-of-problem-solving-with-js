const primeFactors = {};
function primeFactorizationInExponentForm(num) {
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
    factor += 2;
  }

  if (num > 2) primeFactors[num] = (primeFactors[num] || 0) + 1;

  return Math.min(...Object.values(primeFactors)) >= 2;
}

console.log(primeFactorizationInExponentForm(35));
