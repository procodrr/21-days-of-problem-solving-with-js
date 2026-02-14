// Count the Number of Words (Manually Without split)
// Input: " hi there world "
// Output: 3 words ✨ Detect transitions from space → non-space using logic.

function countWords(stn) {
    let trimmed = stn.trim()
    let count = 0;
    for (let i = 0; i < trimmed.length; i++) {
        if(trimmed[i] === " "){
            count++
        }
    }
    return ++count;
}

console.log(countWords(" hi there world "))