function maxSubArrSum(arr) {
  let maxSum = -Infinity;
  let currSum = 0;

  for (const n of arr) {
    currSum += n;

    if (currSum > maxSum) {
      maxSum = currSum;
    }

    if (currSum < 0) {
      currSum = 0;
    }
  }

  return maxSum;
}

console.log(maxSubArrSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
