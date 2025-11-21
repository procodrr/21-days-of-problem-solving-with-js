// Compress a String (Basic Run-Length Encoding)
// Input: "aaabbccccd"
// Output: "a3b2c4d1" ✨ Count consecutive characters and build encoded output.

function compressString(str) {
  let frequency = {};
  for (let i = 0; i < str.length; i++) {
    frequency[str[i]] = (frequency[str[i]] || 0) + 1;
  }
  let compressedStr = "";
  Object.entries(frequency).forEach(([key, value]) => {
    compressedStr += `${key}${value}`
  })
  return compressedStr;
}

console.log(compressString("aaabbccccd"))
