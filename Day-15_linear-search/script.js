function linearSearchObject(arr, searchId) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === searchId) {
      return arr[i];
    }
  }
  return null;
}

console.log(
  linearSearchObject(
    [
      { id: 1, name: "A" },
      { id: 2, name: "B" },
      { id: 3, name: "C" },
    ],
    3
  )
);
