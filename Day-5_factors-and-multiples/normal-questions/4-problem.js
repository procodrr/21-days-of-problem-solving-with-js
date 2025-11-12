// Find LCM

function findLCM(a, b) {
  let dividend = a > b ? a : b;
  let divisor = a < b ? a : b;

  while (dividend % divisor !== 0) {
    let remainder = dividend % divisor;
    dividend = divisor;
    divisor = remainder;
  }

  return (a * b) / divisor;
}

console.log(findLCM(12, 18));
