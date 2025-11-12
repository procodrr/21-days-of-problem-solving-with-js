# 1. Print All Factors of a Number

```js
function getAllFactors(num) {
    const factors = []

    let loopCount = 0
    for(let i = 1; i <= Math.sqrt(num); i++) {
        loopCount++
        if(num % i === 0) {
            factors.splice(factors.length / 2, 0, i)
            const otherPair = num / i
            if(i !== otherPair) factors.splice(factors.length / 2 + 1, 0, otherPair)
        } 
    }
    console.log({num, loopCount});
    return factors
}

console.log(getAllFactors(100));
```

---

# 2. Print All Multiples of a Number up to N

```js
function getMultiples(num, limit) {
    const multiples = []

    for(let i = num; i <= limit; i+=num) {
        multiples.push(i)
    }
    return multiples;
}

console.log(getMultiples(5, 50));
```

---

# 3. Find the HCF (Highest Common Factor) of Two Numbers

```js
function findHCF(a, b) {
    let divisor = a < b ? a : b
    let dividend = a > b ? a : b
    let loopCount = 0

    while(dividend % divisor !== 0) {
        loopCount++
        const remainder = dividend % divisor;
        dividend = divisor
        divisor = remainder
    }
    
   console.log({loopCount});
   return divisor
    
}

console.log(findHCF(20, 36));
```

---

# 4. Find the LCM (Least Common Multiple) of Two Numbers

```js
function findLCM(a, b) {
    let divisor = a < b ? a : b
    let dividend = a > b ? a : b
    let loopCount = 0

    while(dividend % divisor !== 0) {
        loopCount++
        const remainder = dividend % divisor;
        dividend = divisor
        divisor = remainder
    }
    
   return a * b / divisor
}
```