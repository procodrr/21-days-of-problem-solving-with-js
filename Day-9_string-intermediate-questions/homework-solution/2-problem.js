//  Check If a String Is a Pangram
// Input: "The quick brown fox jumps over the lazy dog"
// Output: Pangram ✨ Check if all 26 letters exist.

function isPangram(str) {
    for (let i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) {
        if(!str.includes(String.fromCharCode(i))){
            return false;
        }
    }
    return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"))