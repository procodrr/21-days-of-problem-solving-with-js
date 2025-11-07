# 1. Split Number into Digits

```js
function splitIntoDigit(num) {
    const digits = []
    while(num > 0) {
        digits.unshift(num % 10)
        num = Math.floor(num / 10)
    }
    return digits
}

console.log(splitIntoDigit(1234));
```

---

# 2. Reverse a Number

```js
function reverseDigits(num) {
    const digits = []
    while(num > 0) {
        digits.unshift(num % 10)
        num = Math.floor(num / 10)
    }
    let reveredNumber = 0
    
    for(let i = 0; i < digits.length; i++) {
        reveredNumber += digits[i] * 10 ** i
    }

    return reveredNumber
}

console.log(reverseDigits(2384));
```

---

# 3. Remove the Decimal Point Mathematically

```js
function removeDecimal(num) {
    while(num !== Math.floor(num)) {
        num = num * 10
    }
    return num
}

console.log(removeDecimal(123.4));
```

---

# 4. Separate Whole and Fractional Parts of a Number

```js
function separateParts(num) {
   const fractionPart = Number((num % 1).toFixed(10))
   const wholePart = Number((num - fractionPart).toFixed(10))
   return {wholePart, fractionPart}
}

console.log(separateParts(12.34));
```

---

# 5. Generate a Decimal Number from Whole and Fractional Digits

```js
function generateNumberFromWholeAndFractionalDigit(wholeDigits, fractionalDigits) {
   let wholePart = 0;
   let fractionPart = 0;

    for(let i = 0; i < wholeDigits.length; i++) {
        wholePart += wholeDigits[i] * 10 ** (wholeDigits.length - i - 1)
    }

    for(let i = 0; i < fractionalDigits.length; i++) {
        fractionPart += fractionalDigits[i] * 10 ** -(i + 1)
    }

    return wholePart + Number(fractionPart.toFixed(10))
}

console.log(generateNumberFromWholeAndFractionalDigit([1, 2], [3, 4]));
```

---

# 6. Check if a Number is a Palindrome

```js
function isPalindrome(num) {
    const originalNumber = num;
    const digits = []
    while(num > 0) {
        digits.unshift(num % 10)
        num = Math.floor(num / 10)
    }
    let reveredNumber = 0
    
    for(let i = 0; i < digits.length; i++) {
        reveredNumber += digits[i] * 10 ** i
    }

    return reveredNumber === originalNumber
}

```

---

# 7. Check if a Number is an Armstrong Number (also called a Narcissistic Number)

```js
function isArmstrong(num) {
    const originalNum = num
    const digits = []
    while(num > 0) {
        digits.unshift(num % 10)
        num = Math.floor(num / 10)
    }
    
    let digitsPowerSum = 0

    for(let i=0; i < digits.length; i++) {
        digitsPowerSum += digits[i] ** digits.length
    }
    
    return digitsPowerSum === originalNum
}
```