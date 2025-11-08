// Print Hollow Inverted Pyramid

// Input: Rows = 5

// Output:

// *********
//  *     *
//   *   *
//    * *
//     *
// ✨ Focuses on conditionally printing edges and spaces.

const n = 10;

let line = "";
for (let i = 0; i < n; i++) {
  // for spaces
  for (let k = 0; k < i; k++) {
    line += " ";
  }

  // starting star
  line += "*";

  // middle stars and spaces
  if (i === 0) {
    line += "*".repeat((n - i) * 2 - 3);
  } else if (i !== n - 1) {
    line += " ".repeat((n - i) * 2 - 3);
  }

  // ending star
  if (i !== n - 1) {
    line += "*";
  }

  line += "\n";
}

console.log(line);
