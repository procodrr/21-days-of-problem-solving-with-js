// Check if a Number Is a Smith Number
// A composite number whose sum of digits = sum of digits of prime factors.

// Input: N = 666
// Output: Smith Number

function isSmithNumber(num) {
  let numCopy = num;
  let sumOfNum = sumOfDigit(num);
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

  if (num > 2) primeFactors.push(num);

  if (primeFactors.length === 1 && primeFactors[0] === numCopy) {
    return false;
  }
  let sumOfFactor = primeFactors.reduce(
    (acc, curr) => acc + (curr > 9 ? sumOfDigit(curr) : curr),
    0
  );
  return sumOfFactor === sumOfNum;
}

function sumOfDigit(n) {
  let digits = [];
  while (n !== 0) {
    let lastDigit = Math.floor(n % 10);
    digits.push(lastDigit);
    n = Math.floor(n / 10);
  }
  return digits.reduce((acc, curr) => acc + curr, 0);
}

console.log(isSmithNumber(4));
