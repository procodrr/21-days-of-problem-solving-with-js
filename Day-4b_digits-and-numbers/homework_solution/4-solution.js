// Homework 4: Check if a Number is a Strong Number

// Input: N = 145
// Output: Strong Number
// ✨ Applies factorial of each digit and sums them: 1! + 4! + 5! = 145.

const n = 145;

const factorial = (x) => {
  if (x === 0 || x === 1) return 1;
  return x * factorial(x-1);
};

function isStrongNumber(n) {
  const original = n;
  let strongNumber = 0;
  while (n !== 0) {
    let lastDigit = Math.floor(n % 10);
    strongNumber += factorial(lastDigit);
    n = Math.floor(n / 10);
  }
  
  return strongNumber === original;
}

console.log(isStrongNumber(n))