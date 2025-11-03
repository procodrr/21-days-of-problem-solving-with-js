// Print Inverted Pyramid Pattern

// Input: Rows = 5

// Output:

// *********
//  *******
//   *****
//    ***
//     *
// ✨ Teaches reverse space-star pattern alignment.


const n = 5;

let line = '';
for (let i = 0; i < n; i++) {
    
    // for spaces
    for (let j = 0; j < i; j++) {
        line+=" ";
    }

    // for stars
    for (let k = 0; k < (2*((n-i)-1))+1; k++) {
        line += "*";
    }

    line +="\n";
}

console.log(line);
