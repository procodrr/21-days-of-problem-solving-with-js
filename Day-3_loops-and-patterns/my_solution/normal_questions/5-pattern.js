// Print Hollow Square Pattern

// Input: Rows = 5

// Output:

// *****
// *   *
// *   *
// *   *
// *****
// ✨ Practices conditional printing within nested loops.

const n = 5;

let line = "";
for (let i = 0; i < n; i++) {
    line+="*"; // starting star
    for (let j = 0; j < n-2; j++) {
        if(i === 0 || i === n-1){
            line+="*";
        } else {
            line+=" ";
        }
    }
    line+="*\n"; // starting start
}

console.log(line);