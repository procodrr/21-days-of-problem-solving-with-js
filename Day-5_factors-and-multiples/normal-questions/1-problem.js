// All Factors of a number

const n = 24;

function findFactors(n) {
    const factors = [];
    for (let i = 1; i <= n/2; i++) {
        if(n%i === 0) {
            factors.push(i);
        }
    }
    return [...factors, n];
}

console.log(findFactors(n));