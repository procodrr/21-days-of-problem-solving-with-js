### 1. Print Numbers from 1 to N

```js
// Time Complexity O(n)
const num = 10;

for (let i = 1; i <= num; i++) {
  console.log(i);
}
```

---

### 2. Print Numbers from N to 1 without changing the loop condition of above question

```js
// Time Complexity O(n)
const num = 10;

for (let i = 1; i <= num; i++) {
  console.log(num - i + 1);
}
```

---

### 3. Print All Even Numbers from 1 to N

```js
// Time Complexity O(n)
const num = 10;

for (let i = 1; i <= num; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
```

---

### 4. Sum of First N Natural Numbers

**Brute Force Solution**

```js
// Time Complexity O(n)
console.time();

const num = 1000000000n;
let sum = 0n;

for (let i = 1n; i <= num; i++) {
  sum += i;
}

console.log(sum);
console.timeEnd();
```

**Optimized Solution**

```js
// Time Complexity O(1)
console.time();

const num = 1000000000;
let sum = (num * (num + 1)) / 2;

console.log(sum);
console.timeEnd();
```

---

### 5. Product (Factorial) of N

```js
// Time Complexity O(n)
console.time();

const num = 10n;
let product = 1n;

for (let i = 1n; i <= num; i++) {
  product *= i;
}

console.log(product);
console.timeEnd();
```

---

### 6. Sum of All Even Numbers up to N

```js
// Time Complexity O(n)
console.time();

const num = 10n;
let sum = 0n;

for (let i = 1n; i <= num; i++) {
  if (i % 2n === 0n) sum += i;
}

console.log(sum);
console.timeEnd();
```

---

### 7. Print Squares of Numbers from 1 to N

```js
// Time Complexity O(n)
const num = 10;

for (let i = 1; i <= num; i++) {
  // console.log(i ** 2n);
  // console.log(i * i);
  console.log(Math.pow(i, 2));
}
```
