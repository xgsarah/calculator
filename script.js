let num1 = 0;
let num2 = 0;
let operator = null;
let display = 0;

function add(arrNum) {
  console.log('ADD:', arrNum);
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

function populateDisplay(str) {
  console.log('disp:', str);
  display = display ? String(display).concat(str) : str;
  const displayDiv = document.querySelector('.display');

  displayDiv.innerText = display;
}

function handleOperationButtons() {
  const operatorElements = document.querySelectorAll('.operator');
  operatorElements.forEach((el) =>
    el.addEventListener('click', (e) => {
      operator = e.target.innerText;

      if (!num1) {
        num1 = display;
      } else if (!num2) {
        num2 = display;
      }

      if (num1 && num2) {
        num1 = operate(num1, num2, operator);
        num2 = 0;
        display = 0;
        populateDisplay(num1);
      }
      //   console.log({ num1, num2, operator });
      display = 0;
    })
  );
}

function handleEqualButton() {
  const equalButton = document.querySelector('.equal');
  equalButton.addEventListener('click', (e) => {
    num2 = !num2 ? display : 0;
    display = 0;

    console.log({ num1, num2, operator });
    const result = operate(num1, num2, operator);
    display = 0;
    populateDisplay(result);

    num1 = 0;
    num2 = 0;
    operator = null;
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
