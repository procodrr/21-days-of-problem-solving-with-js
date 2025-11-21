//  Check if a Number Is a Happy Number
// Repeatedly replace the number with the sum of squares of its digits. If it becomes 1, it is Happy.

// Input: N = 19
// Output: Happy Number

function isHappyNumber(n) {
    while(n > 7) {
        n = sumOfSuqares(n);
    }
    return n === 1;
}

function sumOfSuqares(n) {
  let digits = [];
  while (n !== 0) {
    let lastDigit = Math.floor(n % 10);
    digits.push(lastDigit);
    n = Math.floor(n / 10);
  }
  return digits.reduce((acc, curr) => acc + (curr * curr), 0);
}

console.log(isHappyNumber(19))