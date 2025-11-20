# 1. Find the Prime Factorization (Return as an Array)

```js
function primeFactorization(num) {
  const primeFactors = [];

  while (num % 2 === 0) {
    primeFactors.push(2);
    num = num / 2;
  }

  let factor = 3;
  while (factor <= Math.sqrt(num)) {
    while (num % factor === 0) {
      primeFactors.push(factor);
      num = num / factor;
    }
    factor += 2;
  }

  if (num > 2) primeFactors.push(num);
  return primeFactors;
}

console.log(primeFactorization(120));
```

---

# 2. Factorization in Exponent Form

```js
function primeFactorizationInExponentForm(num) {
  const primeFactors = {};
  while (num % 2 === 0) {
    primeFactors[2] = (primeFactors[2] || 0) + 1;
    num = num / 2;
  }

  let factor = 3;
  while (factor <= Math.sqrt(num)) {
    while (num % factor === 0) {
      primeFactors[factor] = (primeFactors[factor] || 0) + 1;
      num = num / factor;
    }
    factor += 2;
  }

  if (num > 2) primeFactors[num] = (primeFactors[num] || 0) + 1;
  let output = "";
  Object.keys(primeFactors).forEach((key, i) => {
    output +=
      `${key}^${primeFactors[key]}` +
      (i !== Object.keys(primeFactors).length - 1 ? " x " : "");
  });
  return output;
}

console.log(primeFactorizationInExponentForm(160));
```

---

# 3. Distinct Prime Factor Count

```js
function primeFactorizationInExponentForm(num) {
  const primeFactors = {};
  while (num % 2 === 0) {
    primeFactors[2] = (primeFactors[2] || 0) + 1;
    num = num / 2;
  }

  let factor = 3;
  while (factor <= Math.sqrt(num)) {
    while (num % factor === 0) {
      primeFactors[factor] = (primeFactors[factor] || 0) + 1;
      num = num / factor;
    }
    factor += 2;
  }

  if (num > 2) primeFactors[num] = (primeFactors[num] || 0) + 1;

  return Object.keys(primeFactors).length;
}

console.log(primeFactorizationInExponentForm(30));
```

---

# 4. Check if a Number Is a Powerful Number

```js
const primeFactors = {};
function primeFactorizationInExponentForm(num) {
  while (num % 2 === 0) {
    primeFactors[2] = (primeFactors[2] || 0) + 1;
    num = num / 2;
  }

  let factor = 3;
  while (factor <= Math.sqrt(num)) {
    while (num % factor === 0) {
      primeFactors[factor] = (primeFactors[factor] || 0) + 1;
      num = num / factor;
    }
    factor += 2;
  }

  if (num > 2) primeFactors[num] = (primeFactors[num] || 0) + 1;

  return Math.min(...Object.values(primeFactors)) >= 2;
}

console.log(primeFactorizationInExponentForm(35));
```
