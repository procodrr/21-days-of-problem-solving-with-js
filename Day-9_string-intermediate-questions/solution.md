# 1️⃣ Find if One String Is a Substring of Another (Manual Method)

```js
function isSubString(str, substr) {
  for (let i = 0; i <= str.length - substr.length; i++) {
    let match = true;

    for (let j = 0; j < substr.length; j++) {
      if (str[i + j] !== substr[j]) {
        match = false;
        break;
      }
    }
    if (match) return true;
  }

  return false;
}

console.log(isSubString("abcde", "cd"));
```

---

# 2️⃣ Manual Substring Search (Without Using indexOf)

```js
function indexOfSubstr(str, substr) {
  for (let i = 0; i <= str.length - substr.length; i++) {
    let match = true;

    for (let j = 0; j < substr.length; j++) {
      if (str[i + j] !== substr[j]) {
        match = false;
        break;
      }
    }
    if (match) return i;
  }

  return -1;
}

console.log(indexOfSubstr("abcde", "cd"));
```

---

# 3️⃣ Check if One String is Rotation of Another

```js
function isRotation(a, b) {
  if (a.length !== b.length) return false;
  a = a + a;

  for (let i = 0; i <= a.length - b.length; i++) {
    let match = true;

    for (let j = 0; j < b.length; j++) {
      if (a[i + j] !== b[j]) {
        match = false;
        break;
      }
    }
    if (match) return true;
  }

  return false;
}

console.log(isRotation("abcde", "cdeab"));
```
