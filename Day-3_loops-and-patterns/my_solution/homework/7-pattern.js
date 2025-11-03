// Print Multiplication Table (Single and Upto N)

// Input 1: Number = 5

// Output:

// 5 x 1 = 5
// 5 x 2 = 10
// ...
// 5 x 10 = 50

// Input 2: Upto = 3

// Output:

// Table of 1
// 1 x 1 = 1
// ...
// Table of 3
// 3 x 10 = 30
// ✨ Practices simple and nested loops for repetitive operations.

// for single nummber
const n = 5;
let line = "";

for (let i = 1; i <= 10; i++) {
  line += `${n} X ${i} = ${n * i}\n`;
}

// console.log(line);

// for upto n
const upto = 5
let line2 = '' 
for (let i = 1; i <= upto; i++) {
    line2 += `\nTable for ${i}\n`;
  for (let j = 1; j <= 10; j++) {
    line2 += `${i} X ${j} = ${i * j}\n`;
  }
}

console.log(line2);
