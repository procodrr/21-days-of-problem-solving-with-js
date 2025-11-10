function findLCM(a, b) {
    let divisor = a < b ? a : b
    let dividend = a > b ? a : b
    let loopCount = 0

    while(dividend % divisor !== 0) {
        loopCount++
        const remainder = dividend % divisor;
        dividend = divisor
        divisor = remainder
    }
    
   
   return a * b / divisor
}

console.log(findLCM(20, 36));
console.log(findLCM(12, 16));
console.log(findLCM(15, 45));