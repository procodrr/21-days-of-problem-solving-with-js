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
