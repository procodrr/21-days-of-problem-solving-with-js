A **leap year** is a year that has **366 days** instead of the usual 365 — the extra day is **February 29**.  

Let’s break it down clearly 👇  

---

### 🧠 **Basic Rule**
A year is a **leap year** if it satisfies these conditions:

1. It is **divisible by 4**,  
   ➜ `year % 4 === 0`
2. **But not divisible by 100**,  
   ➜ `year % 100 !== 0`
3. **Unless** it is also **divisible by 400**,  
   ➜ `year % 400 === 0`

---

### 🧩 **In Simple Words**
- If a year is divisible by **4**, it’s a leap year.  
- **Except** if it’s also divisible by **100**, then it’s **not** a leap year.  
- **But** if it’s divisible by **400**, it **is** a leap year again.

---

### 🧮 **Examples**
| Year | Divisible by 4 | Divisible by 100 | Divisible by 400 | Leap Year? | Explanation |
|------|----------------|------------------|------------------|-------------|--------------|
| 2000 | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | Divisible by 400 → Leap Year |
| 1900 | ✅ Yes | ✅ Yes | ❌ No | ❌ No | Divisible by 100 but not 400 |
| 2020 | ✅ Yes | ❌ No | ❌ No | ✅ Yes | Divisible by 4 but not 100 |
| 2023 | ❌ No | ❌ No | ❌ No | ❌ No | Not divisible by 4 |

---

### 💻 **JavaScript Code Example**
```js
function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear(2000)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2024)); // true
console.log(isLeapYear(2023)); // false
```

---

### 🧠 Quick Summary:
✅ Divisible by 400 → Leap Year  
✅ Divisible by 4 but not by 100 → Leap Year  
❌ Otherwise → Not a Leap Year  

Would you like me to show a **shorter one-line version** of this logic too?