// Homework 3:  Find the Largest and Smallest Digit in a Number

// Input: N = 9483
// Output: Largest = 9, Smallest = 3
// ✨ Enhances comparison logic using loops.

const n = 9483;

function findSmallest_And_Largest(n) {
  let digits = [];
  while (n !== 0) {
    let lastDigit = Math.floor(n % 10);
    digits.unshift(lastDigit);
    n = Math.floor(n / 10);
  }

  // Sort the array in ascending order, using bubble sort :)
  let d = digits.length;
  for (let i = 0; i < d - 1; i++) {
    for (let j = 0; j < d - i - 1; j++) {
      if (digits[j] > digits[j + 1]) {
        [digits[j], digits[j + 1]] = [digits[j + 1], digits[j]];
      }
    }
  }

  // Easy approach
  //   digits.sort();

  return { largest: digits[digits.length - 1], smallest: digits[0] };
}

console.log(findSmallest_And_Largest(n));
