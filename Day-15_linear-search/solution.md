# 1️⃣ Find an Element in an Array Using Linear Search

```js
function linearSearch(arr, el) {
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      console.log(`Found ${el} at index ${i}`);
      return;
    }
  }
  console.log(`${el} does not exit in the given array.`);
}

linearSearch([4, 2, 7, 1, 9], 9);
```

---

# 2️⃣ Find the First Occurrence of an Element

```js
function linearSearchFirst(arr, el) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearchFirst([4, 2, 7, 1, 9], 8));
```

---

# 3️⃣ Find the Last Occurrence of an Element

```js
function linearSearchLast(arr, el) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (el === arr[i]) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearchLast([4, 3, 3, 1, 3, 1, 3], 3));
```

---

# 4️⃣ Count How Many Times an Element Appears

```js
function linearSearchCount(arr, el) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      count++;
    }
  }
  return { count };
}

console.log(linearSearchCount([4, 3, 3, 1, 3, 1, 3], 4));
```

---

# 5️⃣ Find All Indexes Where the Element Appears

```js
function linearSearchAllIndexes(arr, el) {
  const foundIndexes = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      foundIndexes.push(i);
    }
  }
  return foundIndexes;
}

console.log(linearSearchAllIndexes([4, 3, 3, 1, 3, 1, 3], 1));
```

---

# 6️⃣ Linear Search in Array of Objects

```js
function linearSearchObject(arr, searchId) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === searchId) {
      return arr[i];
    }
  }
  return null;
}

console.log(
  linearSearchObject(
    [
      { id: 1, name: "A" },
      { id: 2, name: "B" },
      { id: 3, name: "C" },
    ],
    3
  )
);
```
