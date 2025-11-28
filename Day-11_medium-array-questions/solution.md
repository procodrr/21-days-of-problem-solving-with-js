# 1️⃣ Find Missing Number from Range 1 to N

```js
function findMissingNumber(arr) {
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((acc, curr) => acc + curr, 0);
  return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 5, 4, 3]));
```

---

# 2️⃣ Move All Zeroes to End (Stable, O(n))

```js
function moveZerosToEnd(arr) {
  let pos = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[pos] = arr[i];
      pos++;
    }
  }

  while (pos < arr.length) {
    arr[pos] = 0;
    pos++;
  }
  return arr;
}

console.log(moveZerosToEnd([1, 0, 10, 5, 0, 0, 4, 3]));
```

---

# 3️⃣ Find the First Repeating Element in an Array

```js
function getFirstRepeatingEl(arr) {
  const elementExists = {};

  for (const el of arr) {
    if (elementExists[el]) return el;
    elementExists[el] = true;
  }

  return null;
}

console.log(getFirstRepeatingEl([1, 7, 10, 5, 7, 0, 5, 3, 0]));
console.log(getFirstRepeatingEl([1, 2, 3]));
```

---

# 4️⃣ Maximum Subarray Sum (Kadane’s Algorithm – O(n))

```js
function maxSubArrSum(arr) {
  let maxSum = -Infinity;
  let currSum = 0;

  for (const n of arr) {
    currSum += n;

    if (currSum > maxSum) {
      maxSum = currSum;
    }

    if (currSum < 0) {
      currSum = 0;
    }
  }

  return maxSum;
}

console.log(maxSubArrSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
```

---
