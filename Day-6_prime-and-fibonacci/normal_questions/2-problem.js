// Check if two Numbers are Co-Prime

// Input: (7, 8)
// Output: Co-Prime

function isCoPrime(a, b) {
  let dividend = a > b ? a : b;
  let divisor = a < b ? a : b;

  while (dividend % divisor !== 0) {
    let remainder = dividend % divisor;
    dividend = divisor;
    divisor = remainder;
  }

  return divisor === 1;
}

console.log(isCoPrime(7, 8));
