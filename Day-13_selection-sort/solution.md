# 1️⃣ Sort an Array in Ascending Order Using Selection Sort

```js
function selectionSortAsc(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

console.log(selectionSortAsc([7, 2, 9, 4, 1]));
console.log(selectionSortAsc([17, 20, 99, 4, 31]));
```

---

# 2️⃣ Sort an Array in Descending Order

```js
function selectionSortDesc(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let maxIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[maxIndex]) {
        maxIndex = j;
      }
    }

    if (maxIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[maxIndex];
      arr[maxIndex] = temp;
    }
  }

  return arr;
}

console.log(selectionSortDesc([7, 2, 9, 4, 1]));
console.log(selectionSortDesc([17, 20, 99, 4, 31]));
```

---

# 3️⃣ Find the Kth Smallest Element Using Selection Logic

```js
function findKthSmallest(arr, k) {
  for (let i = 0; i < k; i++) {
    let maxIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[maxIndex]) {
        maxIndex = j;
      }
    }

    if (maxIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[maxIndex];
      arr[maxIndex] = temp;
    }
  }

  return arr[k - 1];
}

console.log(findKthSmallest([7, 2, 9, 4, 1], 3));
console.log(findKthSmallest([17, 20, 99, 4, 31], 4));
```

---

# 4️⃣ Selection Sort but Track Index of Minimum for Each Pass

```js
function selectionSortAscTackIndex(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }

    console.log(`Pass ${i + 1} → min index = ${minIndex}`);
  }

  return arr;
}

console.log(selectionSortAscTackIndex([7, 2, 9, 4, 1]));
```

---

# 5️⃣ Sort an Array of Objects by Name

```js
function selectionSortObject(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j].name.toLowerCase() < arr[minIndex].name.toLowerCase()) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

console.log(
  selectionSortObject([
    { name: "Charlie" },
    { name: "Alice" },
    { name: "Bob" },
    { name: "Anurag" },
  ])
);
```
