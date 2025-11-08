// Separate Whole and Fractional Parts of a Number

// Input: N = 5.75
// Output: Whole = 5, Fraction = 0.75
// ✨ Use mathematical logic to separate the integer and fractional portions without using built-in functions. Don't use Math.trunc() method.


const n = 5.75;

function seperateByDecimals(n) {
    let whole = Math.floor(n);
    // Using this because of javascript floating point overflow behaviour.
    let fraction = Number((n - whole).toFixed(10));
    return { whole, fraction };
}

console.log(seperateByDecimals(n));

// output: 
// 5
// { whole: 5, fraction: 0.7556700000000003 }