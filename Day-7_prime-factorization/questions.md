# 🎯 **Day 7 – Prime Factorization & Composite Numbers**

### 🧩 **Core Concept Focus**

- Understanding **prime factorization**
- Identifying **distinct prime factors**
- Classification of numbers using their factor patterns
- Strengthening number theory reasoning using loops, modulo, and mathematical logic

---

# 🏫 **Class Questions**

## **1. Find the Prime Factorization (Return as an Array)**

- **Input:** `N = 84`
- **Output:** `[2, 2, 3, 7]`

---

## **2. Factorization in Exponent Form**

- **Input:** `N = 360`
- **Output:** `"2^3 × 3^2 × 5^1"`

---

## **3. Distinct Prime Factor Count**

- **Input:** `N = 100`
- **Output:** `Distinct Prime Factors = 2`
  (Because 100 → 2, 5)

---

## **4. Check if a Number Is a Powerful Number**

A number is **powerful** if every prime factor appears with an exponent ≥ 2.

- **Input:** `N = 36`
- **Output:** `Powerful Number`
  (36 → 2² × 3² → all exponents ≥ 2)

---

# 🏠 **Homework Questions**

## **1. Find the Product of All Distinct Prime Factors**

- **Input:** `N = 150`
- **Output:** `Product = 2 × 3 × 5 = 30`

---

## **2. Check if a Number Is a Square-Free Number**

A number is **square-free** if none of its prime factors repeat.

- **Input:** `N = 30`
- **Output:** `Square-Free Number`
  (2 × 3 × 5 → no repeats)

---

## **3. Check if a Number Is a Smith Number**

A composite number whose **sum of digits = sum of digits of prime factors**.

- **Input:** `N = 666`
- **Output:** `Smith Number`

---

## **4. Check if a Number Is an Ugly Number**

Ugly numbers have only **2, 3, 5** as prime factors.

- **Input:** `N = 18`
- **Output:** `Not Ugly`
  (Because 18 → 2 × 3 × 3 → allowed)
- **Input:** `N = 14`
- **Output:** `Not Ugly`
  (Contains 7)

---

## **5. Check if a Number Is a Kaprekar Number**

Square the number → split → sum should give the original number.

- **Input:** `N = 45`
- **Output:** `Kaprekar Number`
  (45² = 2025 → 20 + 25 = 45)

---

## **6. Check if a Number Is a Happy Number**

Repeatedly replace the number with the sum of squares of its digits.
If it becomes **1**, it is Happy.

- **Input:** `N = 19`
- **Output:** `Happy Number`

---

## **7. Number Base Conversion (Any Base to Any Base)**

- **Input:** `Number = "101101", From Base = 2, To Base = 10`
- **Output:** `45`

---

## **8. Swap Variable without using third variable**

- **Input:** `a = 5, b = 6`
- **Output:** `a = 6, b = 5`
