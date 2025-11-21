// Check if One String is Rotation of Another
// Input: "abcde", "cdeab"
// Output: Rotation ✨ Use the trick: second string must be inside (s1 + s1).

function isRotating(str, rotated) {
    let main = str+str;
  for (let i = 0; i < main.length; i++) {
    for (let j = i; j < main.length; j++) {
      if (main.slice(i, j + 1) == rotated) {
        return true;
      }
    }
  }
  return false;
}

console.log(isRotating("abcde", "cdeab"))
