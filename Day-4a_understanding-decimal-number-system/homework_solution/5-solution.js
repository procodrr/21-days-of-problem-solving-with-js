// Generate a Decimal Number from Whole and Fractional Digits

// Input: Whole = [1, 2], Fraction = [3, 4]
// Output: 12.34
// ✨ Form the number mathematically by combining the digits from both arrays using powers of 10.

function generateWholeNumber(arr) {
  const n = arr.length;
  let whole = 0;
  for (let i = 0; i < n; i++) {
    whole = 10 * whole + arr[i];
  }
  return whole;
}

function generateFraction(arr) {
  const n = arr.length;
  let whole = 0;
  let divide = 1;
  for (let i = 0; i < n; i++) {
    whole = 10 * whole + arr[i];
    divide *= 10;
  }
  return whole / divide;
}

const whole = [1, 2],
  fraction = [3, 4];

console.log("Whole : " + generateWholeNumber(whole));
console.log("Fraction : " + generateFraction(fraction));