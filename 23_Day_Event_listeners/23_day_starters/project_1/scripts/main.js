const wrapper = document.querySelector(".wrapper");
const numbers = (n) => [...Array(n + 1).keys()];

const checkPrime = (number) => {
  if (number == 1 || number == 0) return false;
  for (let i = 2; i * i <= number; i++) if (number % i == 0) return false;
  return true;
};

const checkNumbers = (number) => {
  if (checkPrime(number)) return "#F24C3D";
  else if (number % 2 == 0) return "#1F8A70";
  else return "#F2BE22";
};

var list = document.createElement("ul");
list.setAttribute("id", "list");

// Create List
function createList(numbersN) {
  list.innerHTML = "";
  for (let i = 0; i < numbersN.length; i++) {
    let number = document.createElement("span");
    number.style.fontSize = "24px";
    number.className = "number";
    number.textContent = numbersN[i];
    number.style.backgroundColor = checkNumbers(numbersN[i]);
    list.appendChild(number);
  }
}

// Create input
let numberInput = document.createElement("form");

// Button
let button = document.createElement("button");
button.type = "button";
button.setAttribute("id", "MyBtn");
button.textContent = "Generate Numbers";

// Input
let input = document.createElement("input");

input.setAttribute("id", "input");
input.placeholder = "Generate more numbers ...";
input.style.margin = "10px";
input.autofocus = "true";

// Error
let errorSpan = document.createElement("span");
errorSpan.setAttribute("id", "error");

numberInput.appendChild(errorSpan);
numberInput.appendChild(input);
numberInput.appendChild(button);

wrapper.appendChild(numberInput);
wrapper.appendChild(list);

let error = document.getElementById("error");

//   enter number value on the input field to generate numbers
const pattern = /^[0-9]+$/;

button.addEventListener("click", function (event) {
  const inputValue = document.getElementById("input").value;

  if (inputValue == "") {
    error.innerHTML =
      "Enter number value on the input field to generate numbers";
  }
  if (!pattern.test(inputValue)) {
    error.innerHTML = "Input value must be a number";
    event.preventDefault();
  } else {
    createList(numbers(parseInt(inputValue)));
    error.innerHTML = "";
  }
});
