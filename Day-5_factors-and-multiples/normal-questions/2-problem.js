// Get multiples

function getMultiples(num = 4, limit = 30) {
    const multiple = [];
    let original = num;
    while(num <= limit){
        multiple.push(num);
        num += original;
    }
    return multiple;
}

console.log(getMultiples())