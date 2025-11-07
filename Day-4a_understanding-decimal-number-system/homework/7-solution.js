// Homework 7 : Check if a Number is a Harshad Number

// Input: N = 18
// Output: Harshad Number (since 18 is divisible by 1 + 8 = 9)
// ✨ Applies divisibility and digit-sum logic together.

const n = 18;

function isHarshadNumber(n) {
    let nCopy = n;
    let sum = 0
    while(n !== 0) {
        let lastDigit = Math.floor(n%10);
        sum += lastDigit;
        n = Math.floor(n/10);
    }
    return nCopy % sum === 0;
}

console.log(isHarshadNumber(n));