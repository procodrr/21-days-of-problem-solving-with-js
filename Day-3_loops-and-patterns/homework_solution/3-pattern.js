// Print Diamond Pattern

// Input: Rows = 3

// Output:

//     *
//    ***
//   *****
//    ***
//     *


const n = 7;
let line = '';

// upper part
for (let i = 0; i < n-1; i++) {
    line+=' '.repeat((n-i)-1);
    line+='*'.repeat((2*i)+1);
    line+='\n';
}

// middle line
line+= '*'.repeat((n*2)-1);
line+='\n';

// lower part
for (let i = 0; i < n-1; i++) {
    line+=' '.repeat(i+1);
    line+='*'.repeat((n - i) * 2 - 3)
    line+='\n'
}

console.log(line)