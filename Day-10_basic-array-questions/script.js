function concatArray(arr1, arr2) {
  const arr = [];

  for (const el of arr1) {
    arr.push(el);
  }

  for (const el of arr2) {
    arr.push(el);
  }
  return arr;
}

console.log(concatArray([1, 2, 3], [4, 5]));
