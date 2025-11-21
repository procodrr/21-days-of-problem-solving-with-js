// Reverse a String (Manual Method Only)
// Input: "javascript"
// Output: "tpircsavaj" ✨ Use a loop — no .reverse().

function reverse(str) {
    let len = str.length;
    let reverse = '';
    while(len) {
        reverse += str[len-1];
        len--;
    }
    console.log(reverse)
}

reverse("sahil");