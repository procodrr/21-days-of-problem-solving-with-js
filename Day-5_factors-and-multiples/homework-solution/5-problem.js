// Find the HCF and LCM of Three Numbers

// Input: 8, 12, 16
// Output: HCF = 4, LCM = 48

// Find LCM

function findHCFAndLCM(a, b) {
  let dividend = a > b ? a : b;
  let divisor = a < b ? a : b;

  while (dividend % divisor !== 0) {
    let remainder = dividend % divisor;
    dividend = divisor;
    divisor = remainder;
  }

  return { hcf: divisor, lcm: (a * b) / divisor };
}

function find_HCF_and_LCM_of_N_Numbers(...numbers) {
  if (numbers.length < 2) return { hcf: numbers[0], lcm: numbers[0] };

  let { hcf, lcm } = findHCFAndLCM(numbers[0], numbers[1]);

  for (let i = 2; i < numbers.length; i++) {
    hcf = findHCFAndLCM(hcf, numbers[i]).hcf;
    lcm = findHCFAndLCM(lcm, numbers[i]).lcm;
  }

  return { hcf, lcm };
}

console.log(find_HCF_and_LCM_of_N_Numbers(8, 12, 16));
