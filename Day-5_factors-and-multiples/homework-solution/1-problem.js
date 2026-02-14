// Count the Total Number of Factors of a Number

// Input: N = 24
// Output: 8 Factors

function numberOfFactors(n) {
    const factors = [];
    for (let i = 1; i <= n/2; i++) {
        if(n%i === 0) {
            factors.push(i);
        }
    }
    return [...factors, n].length;
}

console.log(numberOfFactors(24))