# 1️⃣ Print All Elements of an Array Using Recursion

```js
function printElements(arr, index = 0) {
  if (index === arr.length) return;
  console.log(arr[index]);
  printElements(arr, index + 1);
}

printElements([1, 2, 4]);
```

---

# 2️⃣ Find the Sum of All Elements in an Array Using Recursion

```js
function sum(arr, index = 0) {
  if (index === arr.length) return 0;
  return arr[index] + sum(arr, index + 1);
}

console.log(sum([2, 4, 6, 8]));
```

---

# 3️⃣ Check if an Array Is Sorted (Ascending) Using Recursion

```js
function isSorted(arr, index = 0) {
  if (index === arr.length - 1) return true;
  if (arr[index] > arr[index + 1]) return false;
  return isSorted(arr, index + 1);
}

console.log(isSorted([1, 3, 2]));
```

---

# 4️⃣ Reverse a String Using Recursion

```js
function reverseString(str, index = str.length - 1) {
  if (index < 0) return "";
  return str[index] + reverseString(str, index - 1);
}

console.log(reverseString("hello"));
```

---

# 5️⃣ Check if a String Is Palindrome Using Recursion

```js
function isPalindrome(str, left = 0, right = str.length - 1) {
  if (left >= right) return true;
  if (str[left] !== str[right]) return false;
  return isPalindrome(str, left + 1, right - 1);
}

console.log(isPalindrome("madam"));
```
