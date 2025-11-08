// Split Number into Digits

// Input: N = 12345
// Output: [1, 2, 3, 4, 5]
// ✨ Extract each digit mathematically using, and return them in an array. Do not use string operations.

let n = 12345;
let arr = [];
while(n > 0) {
    const lastDigit = Math.floor(n % 10);
    arr.push(lastDigit);
    n = Math.floor(n/10);
}
arr.reverse();
console.log(arr);