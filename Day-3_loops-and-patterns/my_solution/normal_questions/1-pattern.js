// Print Right-Angled Star Triangle

// Input: Rows = 5

// Output:

// *
// **
// ***
// ****
// *****


const n = 5;

let line = '';
for (let i = 0; i < n; i++) {
    for (let j = 0; j < i+1; j++) {
        line += "*";
    }
    line+="\n";
}

console.log(line);