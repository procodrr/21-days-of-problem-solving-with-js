# 1. Check if a Number is Prime

```js
function isPrime(num) {
  let factorsCount = 0;
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      factorsCount++;
      const otherPair = num / i;
      if (i !== otherPair) factorsCount++;
    }
  }

  return factorsCount === 2;
}
```

---

# 2. Check if two Numbers are Co-Prime

```js
function isCoPrime(a, b) {
  let divisor = a < b ? a : b;
  let dividend = a > b ? a : b;

  while (dividend % divisor !== 0) {
    const remainder = dividend % divisor;
    dividend = divisor;
    divisor = remainder;
  }

  return divisor === 1;
}
```

---

# 3.

```js
function fibonacci(num) {
  const series = [0n, 1n];

  for (let i = 2n; i < BigInt(num); i++) {
    series.push(series[i - 1n] + series[i - 2n]);
  }

  return series;
}
```

---

# 4.

```js
function nthFibonacci(num) {
  const series = [0n, 1n];

  for (let i = 2n; i < BigInt(num); i++) {
    series.push(series[i - 1n] + series[i - 2n]);
  }

  return series[series.length - 1];
}
```

---

# 5.

```js
function belongToFibonacci(num) {
  num = BigInt(num);
  const series = [0n, 1n];

  for (let i = 2n; true; i++) {
    const nextNumber = series[i - 1n] + series[i - 2n];
    if (nextNumber === num || num === 0n) return true;
    if (nextNumber > num) break;
    series.push(nextNumber);
  }
  return false;
}

function belongToFibonacci(num) {
  return (
    Number.isInteger(Math.sqrt(5 * num ** 2 + 4)) ||
    Number.isInteger(Math.sqrt(5 * num ** 2 - 4))
  );
}
```
