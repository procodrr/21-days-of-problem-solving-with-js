function isRotation(a, b) {
  if (a.length !== b.length) return false;
  a = a + a;

  for (let i = 0; i <= a.length - b.length; i++) {
    let match = true;

    for (let j = 0; j < b.length; j++) {
      if (a[i + j] !== b[j]) {
        match = false;
        break;
      }
    }
    if (match) return true;
  }

  return false;
}

console.log(isRotation("abcde", "cdeab"));
