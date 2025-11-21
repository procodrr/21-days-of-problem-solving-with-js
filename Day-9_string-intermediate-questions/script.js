function isSubstring(str, substr) {
  for (let i = 0; i < str.length - substr.length + 1; i++) {
    let match = true;
    for (let j = 0; j < substr.length; j++) {
      if (str[i + j] !== substr[j]) {
        match = false;
        break;
      }
    }

    if (match) return i;
  }
  return false;
}

console.log(isSubstring("abcdef", "ab"));
