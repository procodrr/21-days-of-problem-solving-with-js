// Check if a String is a Palindrome
// Input: "racecar"
// Output: Palindrome ✨ Compare characters from both ends using two-pointer logic.

function isPalindrome(str) {
    const strArr = str.split("");
    let n = strArr.length;
    for (let i = 0; i < n/2; i++) {
        [strArr[i], strArr[n-i-1]] = [strArr[n-i-1], strArr[i]]
    }
    return strArr.join("") === str;
}

console.log(isPalindrome("abba"))