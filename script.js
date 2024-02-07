let num1 = null;
let num2 = null;
let operator = null;
let display = null;
let expression = null;

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

function operate(num1 = 0, num2 = 0, operator) {
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

function populateExpression() {
  expression = `${num1 !== null ? num1 : ''} ${operator ? operator : ''} ${
    num2 ? num2 : ''
  } ${num1 && num2 && operator ? '=' : ''}`;

  const expressionDiv = document.querySelector('.expression');
  expressionDiv.innerText = expression;
}

function populateDisplay(value) {
  populateExpression();

  display = display ? (display += value) : value;

  const displayDiv = document.querySelector('.total');
  displayDiv.innerText = display;
}

function handleOperationButtons() {
  const operatorElements = document.querySelectorAll('.operator');
  operatorElements.forEach((el) =>
    el.addEventListener('click', (e) => {
      if (num1 === null) {
        num1 = display;
      } else {
        num2 = display;
      }

      if (operator) {
        display = 0;
        const result = operate(num1, num2, operator);
        num1 = result;
        num2 = null;
        populateDisplay(result);
      }

      operator = e.target.innerText;
      display = 0;
    })
  );
}

function handleEqualButton() {
  const equalButton = document.querySelector('.equal');
  equalButton.addEventListener('click', (e) => {
    if (num1) {
      num2 = display;
    } else if (num1 === null || num2 === null) {
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
    num1 = null;
    num2 = null;
    operator = null;
    populateDisplay(0);
  });
}

function handleNumberButtons() {
  const numElements = document.querySelectorAll('.number');
  numElements.forEach((el) =>
    el.addEventListener('click', (e) => {
      if (num1 !== null && num2 !== null && operator !== null) {
        num1 = null;
        num2 = null;
        operator = null;
        display = 0;
      }
      const value = e.target.innerText;
      populateDisplay(value);
    })
  );
}

handleNumberButtons();
handleOperationButtons();
handleClearButton();
handleEqualButton();
