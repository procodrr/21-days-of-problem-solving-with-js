// Print Hollow Diamond Pattern

// Input: Rows = 5

// Output:

//     *
//    * *
//   *   *
//    * *
//     *
// ✨ Teaches combining upward and downward hollow pyramids.

const n = 5;
let line = '';

const half = Math.floor(n/2); // 2

for (let i = 0; i < half; i++) {
    line+=' '.repeat(half-i);

    //starting star
    line+='*';

    //middle space
    if(i>0) {
        line+=' '.repeat((2*i) - 1);
        line+='*'; // ending star
    }

    line += '\n';
}

// middle star & spaces
if(n % 2 === 0) {
    line+='*' + ' '.repeat(n-1) + '*\n';
} else {
    line+='*' + ' '.repeat(n-2) + '*\n';
}

// lower part
for (let i = 0; i < half; i++) {
    line+=' '.repeat(i+1);

    //starting star
    line+='*';

    //middle space
    if(i !== half-1) {
        line += ' '.repeat(2 * (half - i) - 3);
        line+='*'; // ending star
    }

    line += '\n';
}

console.log(line);