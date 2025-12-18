# 1️⃣ Print All Values in a Nested Object

```js
function printObjectValues(obj) {
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      printObjectValues(obj[key]);
    } else {
      console.log(obj[key]);
    }
  }
}

printObjectValues({
  a: 1,
  y: null,
  x: undefined,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: "Hi",
        h: {
          j: {
            k: "JS",
          },
        },
      },
    },
  },
});
```

---

# 2️⃣ Count Total Number of Keys in a Nested Object

```js
function countKeys(obj) {
  let count = 0;
  const keys = Object.keys(obj);
  for (const key of keys) {
    count++;
    if (typeof obj[key] === "object" && obj[key] !== null) {
      count += countKeys(obj[key]);
    }
  }

  return count;
}

console.log(
  countKeys({
    a: 1,
    y: null,
    x: undefined,
    b: {
      c: 2,
      d: {
        e: 3,
        f: {
          g: "Hi",
          h: {
            j: {
              k: "JS",
            },
          },
        },
      },
    },
  })
);
```

---

# 3️⃣ Find the Sum of All Numeric Values in a Nested Object

```js
function calculateSum(obj) {
  let sum = 0;
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      sum += calculateSum(obj[key]);
    } else if (typeof obj[key] === "number") {
      sum += obj[key];
    }
  }
  return sum;
}

console.log(
  calculateSum({
    a: 1,
    y: null,
    x: undefined,
    b: {
      c: 2,
      d: {
        e: 3,
        f: {
          g: 74,
          h: {
            j: {
              k: 10,
            },
          },
        },
      },
    },
  })
);
```

---

# 4️⃣ Print All Keys in a Nested Object

```js
function printKeys(obj) {
  const keys = Object.keys(obj);
  for (const key of keys) {
    console.log(key);
    if (typeof obj[key] === "object" && obj[key] !== null) {
      printKeys(obj[key]);
    }
  }
}

console.log(
  printKeys({
    a: 1,
    y: null,
    x: undefined,
    b: {
      c: 2,
      d: {
        e: 3,
        f: {
          g: 74,
          h: {
            j: {
              k: 10,
            },
          },
        },
      },
    },
  })
);
```
