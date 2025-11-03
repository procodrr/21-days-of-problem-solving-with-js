// Print Hollow Pyramid Pattern

// Input: Rows = 5

// Output:

//     *
//    * *
//   *   *
//  *     *
// *********
// ✨ Combines conditionals and symmetrical logic in loops.

const n = 5;

let line = "";
for (let i = 0; i < n; i++) {
  // for spaces
  for (let k = 0; k < n - i - 1; k++) {
    line += " ";
  }

  // starting star
  line += "*";


  // for middle spaces and middle-ending-star
  if (i === 0) {
    line += "";
  } else if (i > 0 && i !== n - 1) {
      line += " ".repeat(2 * i - 1);
  } else {
    line+='*'.repeat((2*i)-1);
  }

  // ending star (not in starting)
  if (i !== 0) {
    line += "*";
  }

  line += "\n";
}

console.log(line);
