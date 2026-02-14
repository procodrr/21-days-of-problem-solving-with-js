// Find the Greatest Factor of a Number (Other Than Itself)

// Input: N = 36
// Output: 18

function greatestSecondFactor(n) {
  const factors = [];
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      factors.push(i);
    }
  }
  return factors[factors.length - 1];
}

console.log(greatestSecondFactor(36))
