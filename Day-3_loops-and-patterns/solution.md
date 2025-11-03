# 1. Print Right-Angled Star Triangle

```js
const row = 5
for(let i = 1; i <=row; i++) {
    let str = ''

    for(let j = 1; j <= i; j++) {
        str = str + '*'
    }
    console.log(str);
}
```

---

# 2. Print Inverted Right-Angled Triangle

```js
const row = 5

for(let i = row; i >=1; i--) {
    let str = ''

    for(let j = i; j >= 1; j--) {
        str = str + '*'
    }

    console.log(str);
}
```

---

# 3. Print Pyramid Pattern

```js
const row = 5

for(let i = 1; i <= 2*row - 1; i+=2) {
    let str = ''
    const currentRow = (i + 1) / 2

    for(let j = 1; j <= row + currentRow - 1; j++) {
        if(j <= row - currentRow) {
            str += ' '
        } else  {
            str += '*'
        }
    }

    console.log(str);
}
```

---

# 4. Print Inverted Pyramid Pattern

```js
const row = 8

for(let i = 2*row - 1; i >= 1; i-=2) {
    let str = ''
    const currentRow = (i + 1) / 2

    for(let j = 1; j <= row + currentRow - 1; j++) {
        if(j <= row - currentRow) {
            str += ' '
        } else  {
            str += '*'
        }
    }

    console.log(str);
}
```

---

# 5. Print Hollow Square Pattern

```js
const row = 6;

for(let i = 1; i <=row; i++) {
    let str = ''

    for(let j = 1; j <= row; j++) {
        if(i === 1 || i === row || j === 1 || j === row) {
            str = str + '*'
        } else {
            str = str + ' '
        }
    }
    console.log(str);
}
```

# 6. Print Hollow Pyramid Pattern

```js
const row = 5

for(let i = 1; i <= 2*row - 1; i+=2) {
    let str = ''
    const currentRow = (i + 1) / 2

    for(let j = 1; j <= row + currentRow - 1; j++) {
        if(j <= row - currentRow || j > row - currentRow + 1 && j < row + currentRow - 1 && i !== 2*row - 1) {
            str += ' '
        } else  {
            str += '*'
        }
    }

    console.log(str);
}
```

# 7. Print Alternating Binary Triangle

```js
const row = 5

for(let i = 1; i <=row; i++) {
    let str = ''

    for(let j = 1; j <= i; j++) {
        str = str + (i % 2 === 1 ? j % 2 : (j + 1) % 2) 
    }
    console.log(str);
}
```
