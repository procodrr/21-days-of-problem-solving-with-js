const problem1 = (e) => {
  e.preventDefault();
  let inputValue = e.target[0].value;
  const displayDiv = document.getElementById("number-div");
  displayDiv.innerHTML = "";
  for (let i = 1; i <= inputValue; i++) {
    displayDiv.innerHTML += `${i} - `;
  }
  e.target[0].value = "";
};

const problem2 = (e) => {
  e.preventDefault();
  let inputValue = parseInt(e.target[0].value);
  const displayDiv = document.getElementById("number-div");
  displayDiv.innerHTML = "";
  for (let i = 1; i <= inputValue; i++) {
    displayDiv.innerHTML += `${inputValue - i + 1} - `;
  }
  e.target[0].value = "";
};

const problem3 = (e) => {
  e.preventDefault();
  let inputValue = parseInt(e.target[0].value);
  const displayDiv = document.getElementById("number-div");
  displayDiv.innerHTML = "";
  for (let i = 0; i <= inputValue; i += 2) {
    displayDiv.innerHTML += `${i} - `;
  }
  e.target[0].value = "";
};

const problem4 = (e) => {
  e.preventDefault();
  let inputValue = parseInt(e.target[0].value);
  const displayDiv = document.getElementById("number-div");
  let sum = (inputValue * (inputValue + 1)) / 2;
  //   for (let i = 0; i <= inputValue; i+=2) {
  //     sum += i;
  //   }
  displayDiv.innerHTML = "Total sum: " + sum;
  e.target[0].value = "";
};

const problem5 = (e) => {
  e.preventDefault();
  let inputValue = parseInt(e.target[0].value);
  const displayDiv = document.getElementById("number-div");
  let factorial = 1n;
  for (let i = 1n; i <= BigInt(inputValue); i++) {
    factorial *= i;
  }
  displayDiv.innerHTML = "Factorial : " + factorial;
  e.target[0].value = "";
};

const problem6 = (e) => {
  e.preventDefault();
  let inputValue = parseInt(e.target[0].value);
  const displayDiv = document.getElementById("number-div");
  const k = Math.floor(inputValue / 2);
  const sum = k * (k + 1);
  displayDiv.innerHTML = "Sum of even numbers : " + sum;
  e.target[0].value = "";
};

const problem7 = (e) => {
  e.preventDefault();
  let inputValue = parseInt(e.target[0].value);
  const displayDiv = document.getElementById("number-div");
  displayDiv.innerHTML = "";
  for (let i = 0; i <= inputValue; i++) {
    displayDiv.innerHTML += `${i * i} - `;
  }
  e.target[0].value = "";
};

const homework1 = (e) => {
  e.preventDefault();
  let inputValue = parseInt(e.target[0].value);
  const displayDiv = document.getElementById("number-div");
  displayDiv.innerHTML = "";
  for (let i = 1; i <= inputValue; i++) {
    if (i % 3 === 0 && i % 5 === 0) displayDiv.innerHTML += `${i} - `;
  }
  e.target[0].value = "";
};

const homework2 = (e) => {
  e.preventDefault();
  let inputValue = parseInt(e.target[0].value);
  const displayDiv = document.getElementById("number-div");
  displayDiv.innerHTML = "";
  const k = Math.ceil(inputValue / 2);
  const sum = k * k;
  displayDiv.innerHTML = "Sum of odd numbers : " + sum;
  e.target[0].value = "";
};

const homework3 = (e) => {
  e.preventDefault();
  let inputValue = parseInt(e.target[0].value);
  const displayDiv = document.getElementById("number-div");
  displayDiv.innerHTML = "";
  for (let i = 1; i <= inputValue; i++) {
    displayDiv.innerHTML += `${i ** 3} - `;
  }
  e.target[0].value = "";
};

const homework4 = (e) => {
  e.preventDefault();
  let inputValue = parseInt(e.target[0].value);
  const displayDiv = document.getElementById("number-div");
  displayDiv.innerHTML = "";
  for (let i = 1; i <= inputValue; i++) {
    if (Number.isInteger(Math.sqrt(i)) && i % 2 === 0) {
      displayDiv.innerHTML += `${i} - `;
    }
  }
  e.target[0].value = "";
};
