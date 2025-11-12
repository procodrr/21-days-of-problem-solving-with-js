//  find highest common factor

function findHCF(a, b) {
  let dividend = a > b ? a : b;
  let divisor = a < b ? a : b;

  while (dividend % divisor !== 0) {
    let remainder = dividend % divisor;
    dividend = divisor;
    divisor = remainder;
  }

  return divisor;
}

console.log(findHCF(12, 18))