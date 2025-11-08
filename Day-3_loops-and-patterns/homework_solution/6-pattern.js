// Print Rhombus Pattern

// Input: Rows = 5

// Output:

//     *****
//    *****
//   *****
//  *****
// *****
// ✨ Practices offset alignment for uniform patterns.

const n = 5;
let line = '';

for (let i = n; i > 0; i--) {
    line += ' '.repeat(i-1);
    line += '*****\n';
}

console.log(line);
