// Print Hourglass Pattern

// Input: Rows = 5

// Output:

// *********
//  *******
//   *****
//    ***
//     *
//    ***
//   *****
//  *******
// *********

const n = 5;
let line = '';

// upper part
for (let i = 0; i < n-1; i++) {
    //spaces
    line += ' '.repeat(i);

    // starting star
    line+="*";
    // middle star -> odd (7-5-3-1....)
    line+='*'.repeat((n-i) * 2 - 3);
    // ending star
    line+="*";

    line+='\n';
}


// middle space + star
line+=' '.repeat(n-1);
line+='*\n';


// lower part
for (let i = 0; i < n-1; i++) {
    //spaces
    line += ' '.repeat((n-i)-2);
    // starting star
    line+="*";
    // middle star -> odd (1-3-5-7....)
    line+='*'.repeat((2*i)+1);
    // ending star
    line+="*";

    line+='\n';
}

console.log(line);