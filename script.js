let num1 = 0;
let num2 = 0;
let operator = null;
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
  const x = Number(num1);
  const y = Number(num2);

  switch (operator) {
    case '+':
      return add([x, y]);
    case '-':
      return subtract([x, y]);
    case '*':
      return multiply([x, y]);
    case '/':
      return divide([x, y]);
    default:
      return 0;
  }
}

function populateDisplay(value) {
  display = display ? (display += value) : value;

  const displayDiv = document.querySelector('.display');
  displayDiv.innerText = display;
}

function handleOperationButtons() {
  const operatorElements = document.querySelectorAll('.operator');
  operatorElements.forEach((el) =>
    el.addEventListener('click', (e) => {
      operator = e.target.innerText;

      num1 = display;
      display = 0;
    })
  );
}

function handleEqualButton() {
  const equalButton = document.querySelector('.equal');
  equalButton.addEventListener('click', (e) => {
    if (num1) {
      num2 = display;
    } else {
      num1 = display;
    }

    display = 0;
    const result = operate(num1, num2, operator);
    populateDisplay(result);
  });
}

function handleClearButton() {
  const clearButton = document.querySelector('.clear');
  clearButton.addEventListener('click', (e) => {
    display = 0;
    num1 = 0;
    num2 = 0;
    operator = null;
    populateDisplay(0);
  });
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
handleOperationButtons();
handleClearButton();
handleEqualButton();
