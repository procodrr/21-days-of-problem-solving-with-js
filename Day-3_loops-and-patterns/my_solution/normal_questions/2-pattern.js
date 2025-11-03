// Print Inverted Right-Angled Triangle

// Input: Rows = 5

// Output:

// *****
// ****
// ***
// **
// *
// ✨ Reinforces decreasing nested loop structure.


const n = 5;

let line = '';
for (let i = 0; i < n; i++) {
    for (let j = n-i; j > 0; j--) {
        line += '*'
    }
    line+="\n";
}

console.log(line);