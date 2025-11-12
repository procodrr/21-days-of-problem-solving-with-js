// Find the Nth Fibonacci Number

// Input: N = 8
// Output: 13

function nthFibonacci(num) {
  const series = [0, 1];

  for (let i = 2; i < num; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }

  return series.pop();
}

console.log(nthFibonacci(8));
