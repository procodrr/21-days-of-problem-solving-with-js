// Print Butterfly Pattern

// Input: Rows = 10

// Output:

// *       *
// **     **
// ***   ***
// **** ****
// *********
// **** ****
// ***   ***
// **     **
// *       *
// ✨ Combines multiple sections with symmetry logic.


const n = 10;

let line = '';

// upper part
for (let i = 0; i < n-1; i++) {
    // starting star
    line+='*'.repeat(i+1);

    // space
    line+=' '.repeat((n - i) * 2 - 3);

    // ending start
    line+='*'.repeat(i+1);

    line+='\n';
}

//middle line
line+='*'.repeat((n*2)-1);
line+='\n';

// lower part
for (let i = 0; i < n-1; i++) {
    // starting star
    line+='*'.repeat((n-i)-1);

    // space
    line+=' '.repeat((2*i) + 1);

    // ending start
    line+='*'.repeat((n-i)-1);

    line+='\n';
}

console.log(line);