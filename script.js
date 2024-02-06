let num1, num2, operator;
let display = 0;

function add(arrNum) {
  return arrNum.reduce((prev, curr) => prev + curr, 0);
}

function subtract(arrNum) {
  return arrNum.reduce((prev, curr) => prev - curr);
}

function multiply(arrNum) {
  return arrNum.reduce((prev, curr) => prev * curr);
}

function divide(arrNum) {
  return arrNum.reduce((prev, curr) => prev / curr);
}

function operate(num1, num2, operator) {
  switch (operator) {
    case '+':
      return add([num1, num2]);
    case '-':
      return subtract([num1, num2]);
    case '*':
      return multiply([num1, num2]);
    case '/':
      return divide([num1, num2]);
    default:
      return 0;
  }
}

function populateDisplay(str) {
  display = str;
  const displayDiv = document.querySelector('.display');
  displayDiv.innerText = display;
}

function handleNumberButtons() {
  const numElements = document.querySelectorAll('.number');
  numElements.forEach((el) =>
    el.addEventListener('click', (e) => {
      const value = e.target.innerText;
      populateDisplay(value);
    })
  );
}

handleNumberButtons();
