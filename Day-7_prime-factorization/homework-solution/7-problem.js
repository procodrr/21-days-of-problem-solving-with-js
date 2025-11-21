// Number Base Conversion (Any Base to Any Base)
// Input: Number = "101101", From Base = 2, To Base = 10
// Output: 45

// Works only for binary -> decmial && decimal -> binary
function numberConvertion(num, from, to) {
  if (from == to) return num;
  let digits = [];
  if (from > to) {
    while (num !== 0) {
      digits.push(Math.floor(num % to));
      num = Math.floor(num / to);
    }
    return +digits.join("");
  } else {
    let i = 0;
    while (num !== 0) {
      let lastDigit = Math.floor(num % 10);
      digits.push(lastDigit * 2 ** i);
      num = Math.floor(num / 10);
      i++;
    }
    return digits.reduce((acc, curr) => acc + curr, 0);
  }
}

console.log(numberConvertion(13, 10, 2));
