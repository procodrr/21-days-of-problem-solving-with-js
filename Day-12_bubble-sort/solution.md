# 1️⃣ Sort an Array in Ascending Order Using Bubble Sort

```js
const arr = [0, 1, 2, 4, 7];
// const arr = [4, 1, 7, 0, 2];
// const arr = [5, 3, 8, 4, 2];
// const arr = [15, 33, 8, 54, 2, 1, 7, 100, 300, 5];

// Best Time Complexity O(N)
// Worst Time Complexity O(N^2)

// const arr = [1, 2, 5, 7, 8, 15, 33, 54, 100, 300];
// const arr = [300, 100, 54, 33, 15, 8, 7, 5, 2, 1];

function bubbleSortAsc(arr) {
  let loopCount = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      loopCount++;
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }

  console.log({ loopCount });
  return arr;
}

console.log(bubbleSortAsc(arr));
```

---

# 2️⃣ Sort an Array in Descending Order Using Bubble Sort

```js
// const arr = [0, 1, 2, 4, 7];
// const arr = [4, 1, 7, 0, 2];
// const arr = [5, 3, 8, 4, 2];
// const arr = [15, 33, 8, 54, 2, 1, 7, 100, 300, 5];

// Best Time Complexity O(N)
// Worst Time Complexity O(N^2)

const arr = [1, 2, 5, 7, 8, 15, 33, 54, 100, 300];
// const arr = [300, 100, 54, 33, 15, 8, 7, 5, 2, 1];

function bubbleSortDesc(arr) {
  let loopCount = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      loopCount++;
      if (arr[j] < arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }

  console.log({ loopCount });
  return arr;
}

console.log(bubbleSortDesc(arr));
```

---

# 3️⃣ Sort a String Alphabetically Using Bubble Sort Logic

```js
function bubbleSortString(str) {
  const arr = str.split("");
  let loopCount = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      loopCount++;
      if (arr[j].toLowerCase() > arr[j + 1].toLowerCase()) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }

  console.log({ loopCount });
  return arr.join("");
}

console.log(bubbleSortString("JavaScript"));
```

---

# 4️⃣ Sort an Array and Count the Number of Swaps Performed

```js
function bubbleSortSwapCount(arr) {
  let swapCount = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
        swapCount++;
      }
    }
    if (!swapped) break;
  }

  console.log({ swapCount });
  return arr;
}

console.log(bubbleSortSwapCount([1, 2, 5, 7, 8, 15, 33, 54, 100, 300]));
console.log(bubbleSortSwapCount([300, 100, 54, 33, 15, 8, 7, 5, 2, 1]));
```
