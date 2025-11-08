// Count Whole and Fractional Digits Separately

// Input: N = 12.345
// Output: Whole Count = 2, Fraction Count = 3
// ✨ Separate the number into whole and fractional parts, then count digits in each part using pure math. Don't use Math.trunc() method.

function seperateByDecimals(n) {
  let whole = Math.floor(n);
  // Using this because of javascript floating point overflow behaviour.
  let fraction = Number((n - whole).toFixed(10));
  return { whole, fraction };
}

function wholeNumberCount(n) {
  let count = 0;
  while (n !== 0) {
    count++;
    n = Math.floor(n / 10);
  }
  return count;
}

function fractionCount(n) {
  // Remove decimals points & count it as whole number
  while (n % 1 !== 0) {
    n = Number(n * 10).toFixed(10);
  }
  return wholeNumberCount(n);
}

function main(n) {
  // Step 1 -> Separate the number into whole and fractional parts.
  const { whole, fraction } = seperateByDecimals(n);

  // Step 2 -> use correponding fuctions to count digits.
  return {
    wholeCount: wholeNumberCount(whole),
    fractionCount: fractionCount(fraction),
  };
}

const n = 12.345;
console.log(main(n));