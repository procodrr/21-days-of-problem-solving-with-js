//  Remove All Duplicate Words From a Sentence
// Input: "this is is a test test string"
// Output: "this is a test string" ✨ Track seen words, build cleaned sentence.

function removeDuplicates(str) {
    return [...new Set(str.split(" "))].join(" ");
}

console.log(removeDuplicates("this is is a test test string"))