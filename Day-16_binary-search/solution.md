# 1️⃣ Find an Element Using Binary Search

```js
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 7));
```

---

# 2️⃣ Find the First Occurrence of a Repeated Number

```js
function binarySearchFirst(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let ans = -1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      ans = mid;
      end = mid - 1;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return ans;
}

console.log(binarySearchFirst([2, 4, 4, 4, 9, 11], 4));
```

---

# 3️⃣ Find the Last Occurrence of a Repeated Number

```js
function binarySearchLast(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let ans = -1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      ans = mid;
      start = mid + 1;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return ans;
}

console.log(binarySearchLast([2, 4, 4, 4, 9, 11], 4));
```
