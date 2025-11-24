# 1️⃣ Find the Maximum and Minimum Element

```js
function minMaxFromArray(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return { min, max };
}

console.log(minMaxFromArray([5, 7, 113, 87, 2]));
```

---

# 2️⃣ Reverse an Array (Manual Method Only)

```js
function reverseArray(arr) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex < rightIndex) {
    const temp = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp;
    leftIndex++;
    rightIndex--;
  }

  return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5, 6]));
```

---

# 3️⃣ Check if an Array is Sorted (Ascending)

```js
function isArraySorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(isArraySorted([1, 2, 3, 4, 5, 6]));
```

---

# 4️⃣ Remove All Duplicates From an Array (Use filter method)

```js
function removeDuplicates(arr) {
  return arr.filter((el, index) => arr.indexOf(el) === index);
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 4]));
```

---

# 5️⃣ Merge Two Arrays Without Using concat or spread

```js
function concatArray(arr1, arr2) {
  const arr = [];

  for (const el of arr1) {
    arr.push(el);
  }

  for (const el of arr2) {
    arr.push(el);
  }
  return arr;
}

console.log(concatArray([1, 2, 3], [4, 5]));
```
