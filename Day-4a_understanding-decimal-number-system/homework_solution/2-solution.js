// Remove the Decimal Point Mathematically

// Input: N = 12.34
// Output: 1234
// ✨ Do not use string operations.


let n = 12.34;
function removeDecimalPoints(n) {
    while(n%1 !== 0) {
        // Using this because of javascript floating point overflow behaviour.
        n = Number((n*10).toFixed(10));
    }
    // removing extra decimal zero.
    return Math.floor(n);
}

console.log(removeDecimalPoints(n));