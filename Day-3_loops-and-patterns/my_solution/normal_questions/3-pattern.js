// Print Pyramid Pattern

// Input: Rows = 5

// Output:

//     *
//    ***
//   *****
//  *******
// *********
// ✨ Teaches alignment using spaces and nested loops.

const n = 5;

let line = '';
for (let i = 0; i < n; i++) {
    
    // for spaces
    for (let j = 0; j < (n-i)-1; j++) {
        line+=" ";
    }

    // for stars
    for (let k = 0; k < (2*i)+1; k++) {
        line += "*";
    }

    line +="\n";
}

console.log(line);