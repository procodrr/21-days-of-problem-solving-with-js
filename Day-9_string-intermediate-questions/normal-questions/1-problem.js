// Find if One String Is a Substring of Another (Manual Method)
// Input: Main string: "hellothere" Target string: "there"

// Output: true ✨ Manual parsing only; check character by character without using includes, or indexOf.

function isSubstring(main, target) {
    for (let i = 0; i < main.length; i++) {
        for (let j = i; j < main.length; j++) {
            if(main.slice(i, j+1) == target) {
                return true;
            }
        }
    }
    return false;
}

console.log(isSubstring("hellothere", "there"))