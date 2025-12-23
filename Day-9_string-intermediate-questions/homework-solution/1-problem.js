//  Count Frequency of Each Word in a Sentence
// Input: "i love coding and i love javascript"
// Output: { i:2, love:2, coding:1, and:1, javascript:1 } ✨ Word parsing + map building.

function wordFrequency(stn) {
  let freq = {};
  let words = stn.split(" ");
  for (let i = 0; i < words.length; i++) {
    freq[words[i]] = (freq[words[i]] || 0) + 1;
  }
  return freq;
}


console.log(wordFrequency("i love coding and i love javascript"))