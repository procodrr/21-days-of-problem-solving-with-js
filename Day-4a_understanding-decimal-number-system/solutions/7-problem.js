// Q7: Check if a Number is an Armstrong Number (also called a Narcissistic Number)

// Input: N = 153
// Output: Armstrong Number
// ✨ Armstrong Number: 1³ + 5³ + 3³ = 153, 1⁴ + 6⁴ + 3⁴ + 4⁴ = 1634.

const n = 153;

function isArmstrong(n) {
    const original = n;
    let armstrong = 0;
    let digits = [];
    while(n!==0){
        let lastDigit = Math.floor(n % 10);
        digits.unshift(lastDigit);
        n = Math.floor(n/10);
    }

    for (let i = 0; i < digits.length; i++) {
        armstrong += Math.pow(digits[i], digits.length);
    }

    return armstrong === original;
}

console.log(isArmstrong(n));