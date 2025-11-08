// Homework 5: Check if a Number is an Automorphic Number

// Input: N = 25
// Output: Automorphic Number (since 25² = 625 ends with 25)
// ✨ Practices modulus-based pattern matching.

const n = 25;

function isAutomorphic(n) {
    let square = n**2;
    while(n !== 0){
        let lastDigitOfN = Math.floor(n % 10);
        let lastDigitOfSquare = Math.floor(square % 10);
        
        if(lastDigitOfN !== lastDigitOfSquare) {
            return false;
        }

        n = Math.floor(n /10);
        square = Math.floor(square/10);
    }
    return true;
}

console.log(isAutomorphic(n))