// Check if a Number Is a Kaprekar Number
// Square the number → split → sum should give the original number.

// Input: N = 45
// Output: Kaprekar Number (45² = 2025 → 20 + 25 = 45)

function isKaprekarNumber(num) {
  let square = num ** 2;
  let digits = [];
  while (square !== 0) {
    let lastDigit = Math.floor(square % 10);
    digits.unshift(lastDigit);
    square = Math.floor(square / 10);
  }
  const mid = Math.floor(digits.length / 2);
  const firstPart = digits.slice(0, mid).join("");
  const secondPart = digits.slice(mid).join("");
  return num ** 2 == (firstPart + secondPart);
}

console.log(isKaprekarNumber(45));
