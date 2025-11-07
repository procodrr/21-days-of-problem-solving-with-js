// Q6: Check if a Number is a Palindrome

// Input: N = 121
// Output: Palindrome
// ✨ Compares original and reversed numbers to detect symmetry.


const n = 121;

function isPalindrome(n) {
    const original = n;
    let reverse = 0;
    while(n !== 0) {
        reverse = 10*reverse + Math.floor(n%10);
        n = Math.floor(n/10);
    }
    return original === reverse;
}

console.log(isPalindrome(n));