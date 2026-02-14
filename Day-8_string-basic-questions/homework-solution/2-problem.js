// Check if a String Contains Only Alphabets (No Regex)
// Input: "HelloWorld123"
// Output: False ✨ Use ASCII ranges manually.

function containsAlphabets(str) {
    for (let i = 0; i < str.length; i++) {
        let asciCode = str[i].charCodeAt();
        if(!((asciCode >= 65 && asciCode <= 90) || (asciCode >= 97 && asciCode <= 122))) {
            return false;
        }
    }
    return true;
}

console.log(containsAlphabets("HelloWorld123"))