// Find All Substrings of a String (No Built-ins)
// Input: "abc"
// Output: a, ab, abc, b, bc, c ✨ Nested loops + substring construction.

function substring(str) {
    let substring = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            substring.push(str.slice(i, j+1))
        }
    }
    return substring;
}

console.log(substring("abc"));