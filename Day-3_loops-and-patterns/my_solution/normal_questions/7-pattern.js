// Print Alternating Binary Triangle

// Input: Rows = 5

// Output:

// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1
// ✨ Combines parity logic with nested loops.

const n = 5;

let line = "";
let toggle = 1;
for (let i = 0; i < n; i++) {
  if (i % 2 === 0) {
    toggle = 1;
  }
  for (let j = 0; j < i + 1; j++) {
    line += toggle;
    toggle = toggle === 1 ? 0 : 1;
  }
  line += "\n";
}

console.log(line);
