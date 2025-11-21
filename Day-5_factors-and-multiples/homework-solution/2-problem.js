// Sum of All Factors of a Number

// Input: N = 12
// Output: Sum = 28

function sumOfFactors(n) {
  const factors = [];
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      factors.push(i);
    }
  }
  return [...factors, n].reduce((acc, curr) => acc + curr, 0);
}

console.log(sumOfFactors(12))