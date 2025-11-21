// Reverse Only the Words in a Sentence
// Input: "I love coding"
// Output: "coding love I" ✨ Split manually or build reverser yourself.

function reverseSentence(stn) {
    let words = stn.split(" ");
    let n = words.length;
    for (let i = 0; i < n/2; i++) {
        [words[i], words[n-i-1]] = [words[n-i-1], words[i]]
    }
    return words.join(" ");
}

console.log(reverseSentence("I love coding"));